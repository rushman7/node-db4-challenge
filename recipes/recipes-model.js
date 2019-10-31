const db = require('../data/dbConfig');

module.exports = { getRecipes, getShoppingList, getInstructions }

function getRecipes() {
  return db('recipes')
}

function getShoppingList(id) {
  return db('recipes')
    .where({ id })
    .select('recipes.id', 'recipes.recipe_name', 'ingredients.amount', 'ingredients.ingredient')    
    .join('ingredients', 'recipes.id','=', 'ingredients.recipes.id')
}

function getInstructions(id) {
  return db('recipes')
    .where({ id })
    .select('recipes.id', 'recipes.recipe_name', 'instructions.step_number', 'instructions.instruction')    
    .join('instructions', 'recipes.id','=', 'instructions.recipes.id')
}