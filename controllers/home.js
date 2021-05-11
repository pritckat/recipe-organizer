const Recipe = require("../models/recipe")
  
  module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },

    getProfile: async (req,res)=>{
      try {
        console.log(req.user)
        const user = req.user.userName
        const recipes = await Recipe.find({user: req.user._id})
        console.log(recipes)
        res.render('profile.ejs', {user: user, recipes: recipes})
      } catch(err){
        console.log(err)
      }
    }
}