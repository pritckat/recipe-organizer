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
    createRecipe: async (req, res)=>{
        try{
            await Recipe.create({name: req.body.name, madeBefore: false})
            console.log('Recipe has been added!')
            res.redirect('/pages/recipes')
        }catch(err){
            console.log(err)
        }
    }
}
