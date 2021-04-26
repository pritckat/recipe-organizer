const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  timesMade: {
    type: Number,
    required: true,
  },
  lastMade: {
    type: Date,
    required: false,
  },
  tags: {
    type: Array,
    required: false,
    default: [],
  },
  tags: {
    type: Array,
    required: false,
    default: [],
  }
})

module.exports = mongoose.model('Recipe', RecipeSchema)