
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 255).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient', 255).notNullable();
      tbl.float('amount').unsigned().notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('step_number').unsigned().notNullable();
      tbl.string('instruction', 255).notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
