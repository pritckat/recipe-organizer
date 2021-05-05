  module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },

    getProfile: (req,res)=>{
      console.log(req.user)
      const user = req.user.userName
      res.render('profile.ejs', {user: user})
    }
}