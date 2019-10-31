
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, amount: 1, ingredient: 'milk'},
        { recipe_id: 1, amount: 2, ingredient: 'eggs'},
        { recipe_id: 1, amount: 2, ingredient: 'chocolate chips'},
        { recipe_id: 2, amount: 1, ingredient: 'cereal'},
        { recipe_id: 2, amount: 1, ingredient: 'milk'},
        { recipe_id: 3, amount: 2, ingredient: 'eggs'},
        { recipe_id: 3, amount: 2, ingredient: 'bacon'},
        { recipe_id: 3, amount: 1, ingredient: 'cheese'},
        { recipe_id: 3, amount: 1, ingredient: 'roll of bread'},
      ]);
    });
};
