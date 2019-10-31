const db = require('../data/dbConfig');

module.exports = { getRecipes, getShoppingList, getInstructions }

function getRecipes() {
  return db('recipes')
}

function getShoppingList(id) {
  return db('recipes as r')
    .where({ id })
    .join('ingredients as i', 'r.id','=', 'i.recipe.id')
    .select('r.id', 'r.recipe_name', 'i.amount', 'i.ingredient')    
}

function getInstructions(id) {
  return db('recipes as r')
    .join('instructions as i', 'r.id', 'i.recipe.id')  
    .select('r.id', 'r.recipe_name', 'i.step_number', 'i.instruction')  
    .where({ id })
}