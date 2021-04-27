const Recipe = require("../models/recipe")

module.exports = {
    getRecipes: async (req,res)=>{
        try{
            const recipeItems = await Recipe.find()
            res.render('./pages/recipes.ejs', {recipes: recipeItems})
        }catch(err){
        console.log(err)
        }
    },
    getRecipe: async (req,res)=>{
        try{
            const recipe = await Recipe.findOne({_id:req.params.id})
            console.log(req.params.id)
            console.log(recipe)
            res.render('./pages/recipe.ejs', {recipe: recipe})
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
            await Recipe.findOneAndUpdate({_id:req.body.name},{
                madeBefore: true
            })
            console.log('Updated')
        }catch(err){
            console.log(err)
        }
    }
}
