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
            await Recipe.create({name: req.body.name, timesMade: 0, tags: ['homey']})
            console.log('Recipe has been added!')
            res.redirect('/recipes')
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
    }
}
