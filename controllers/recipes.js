const recipe = require("../models/recipe")

module.exports = {
    getRecipes: async (req,res)=>{
        try{
            const recipeItems = await recipe.find()
            console.log('hi')
            console.log(recipeItems)
            res.render('./pages/recipes.ejs', {recipes: recipeItems})
        }catch(err){
        console.log(err)
        }
    },
    createRecipe: async (req, res)=>{
        try{
            await Recipe.create({name: req.body.name, madeBefore: false})
            console.log('Recipe has been added!')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    }
}
