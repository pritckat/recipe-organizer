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
    }
}
