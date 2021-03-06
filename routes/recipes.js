const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipes')

router.get('/', recipeController.getRecipes)
router.get('/random', recipeController.getRandomRecipe)
router.get('/search', recipeController.getSearch)
router.get('/:id', recipeController.getRecipe)
router.post('/searchRecipes', recipeController.searchRecipes)
router.post('/createRecipe', recipeController.createRecipe)
router.post('/updateRecipe/:id', recipeController.updateRecipe)
router.post('/deleteRecipe/:id')
module.exports = router