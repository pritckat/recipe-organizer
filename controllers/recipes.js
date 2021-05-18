const Recipe = require("../models/recipe")

module.exports = {
    getRecipes: async (req,res)=>{
        try{
            const recipeItems = await Recipe.find()
            res.render('recipes', {recipes: recipeItems})
        }catch(err){
        console.log(err)
        }
    },
    getRecipe: async (req,res)=>{
        try{
            const recipe = await Recipe.findOne({_id: req.params.id})
            res.render('recipe', {recipe: recipe})
        }catch(err){
        console.log(err)
        }
    },
    createRecipe: async (req, res)=>{
        try{
            await Recipe.create({
                name: req.body.name,
                timesMade: 0,
                tags: ['homey'],
                user: req.user._id
            })
            console.log('Recipe has been added!')
            res.redirect('/profile')
        }catch(err){
            console.log(err)
        }
    },
    deleteRecipe: async (req,res) => {
        try{
            await Recipe.findOneAndDelete({name: req.body.name})
            console.log('Recipe deleted')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    },
    updateRecipe: async (req, res)=>{
        try{
            console.log(req.params)
            await Recipe.findOneAndUpdate(
                {_id:req.params.id},
                {$set: {
                    madeBefore: true,
                    name: req.body.recipeName
                }}
            )
            console.log('Updated')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    },
    getRandomRecipe: async(req, res)=>{
        try{
            const recipe = await Recipe.aggregate([{$sample:{size: 1}}])
            res.render('random', {recipe: recipe[0]})
        }catch(err){
            console.log(err)
        }
    },
    searchRecipes: async (req,res)=>{
        const recipes = await Recipe.find({name: {"$regex":`${req.body.name}`}, user: req.user})
        console.log('the recipes', recipes)
        res.render('search.ejs', {user: req.user.userName, recipes: recipes})
    },
    getSearch: async (req,res)=>{
        console.log(req.params)
        const recipes = await Recipe.find({user: req.user})
        console.log(recipes)
        res.render('search.ejs', {recipes: recipes})
    }
}
