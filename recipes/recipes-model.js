const db = require('../data/dbConfig');

module.exports = { getRecipes, getShoppingList, getInstructions }

function getRecipes() {
  return db('recipes')
};

function getShoppingList(id) {
  return db('recipes as r')
    .join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id')  
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')  
    .select('i.name', 'ri.quantity')  
};

function getInstructions(id) {
  return db('recipes as r')
    .join('steps as s', 'r.id', 's.recipe_id')  
    .select('s.step_number', 's.instructions')  
    .where({ "r.id": id })
    .orderBy('s.step_number')
};