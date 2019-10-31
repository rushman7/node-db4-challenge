
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step_number: 1, instruction: 'Add milk and eggs'},
        { recipe_id: 1, step_number: 2, instruction: 'Add chocolate and mix'},
        { recipe_id: 1, step_number: 3, instruction: 'Serve Cookies'},
        { recipe_id: 2, step_number: 1, instruction: 'Add Cereal'},
        { recipe_id: 2, step_number: 2, instruction: 'Add Milk'},
        { recipe_id: 2, step_number: 3, instruction: 'Add Spoon'},
        { recipe_id: 2, step_number: 4, instruction: 'Enjoy bowl of cereal'},
        { recipe_id: 3, step_number: 1, instruction: 'Crack open 2 eggs'},
        { recipe_id: 3, step_number: 2, instruction: 'Put bacon on the grill'},
        { recipe_id: 3, step_number: 3, instruction: 'Cheese on eggs once cooked'},
        { recipe_id: 3, step_number: 4, instruction: 'Enjoy bacon, egg and cheese'},
      ]);
    });
};


