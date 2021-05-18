const Recipe = require("../models/recipe")
  
  module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },

    getProfile: async (req,res)=>{
      try {
        console.log(req.user)
        const recipes = await Recipe.find({user: req.user._id})
        res.render('profile.ejs', {user: req.user.userName, recipes: recipes})
      } catch(err){
        console.log(err)
      }
    },
}