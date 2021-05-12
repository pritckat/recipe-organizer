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
  ingredients: {
    type: Array,
    required: false,
    default: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  source: {
    type: String,
    required: true,
  },
  sourceType: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Recipe', RecipeSchema)