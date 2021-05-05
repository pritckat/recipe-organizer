  module.exports = {
    getIndex: (req,res)=>{
      console.log(req)
        res.render('./pages/index.ejs')
    }
}