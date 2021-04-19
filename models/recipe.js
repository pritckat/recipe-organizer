const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  madeBefore: {
    type: Boolean,
    required: true,
  },
  comfort: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Recipe', RecipeSchema)