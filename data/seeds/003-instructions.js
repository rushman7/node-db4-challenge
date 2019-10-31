
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, instructions: 'Add milk and eggs'},
        { recipe_id: 1, step_number: 2, instructions: 'Add chocolate and mix'},
        { recipe_id: 1, step_number: 3, instructions: 'Serve Cookies'},
        { recipe_id: 2, step_number: 1, instructions: 'Add Cereal'},
        { recipe_id: 2, step_number: 2, instructions: 'Add Milk'},
        { recipe_id: 2, step_number: 3, instructions: 'Add Spoon'},
        { recipe_id: 2, step_number: 4, instructions: 'Enjoy bowl of cereal'},
        { recipe_id: 3, step_number: 1, instructions: 'Crack open 2 eggs'},
        { recipe_id: 3, step_number: 2, instructions: 'Put bacon on the grill'},
        { recipe_id: 3, step_number: 3, instructions: 'Cheese on eggs once cooked'},
        { recipe_id: 3, step_number: 4, instructions: 'Enjoy bacon, egg and cheese'},
      ]);
    });
};


