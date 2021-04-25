const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipes')

router.get('/', recipeController.getRecipes)
router.post('/createRecipe', recipeController.createRecipe)
router.put('/updateRecipe', recipeController.updateRecipe)
module.exports = router