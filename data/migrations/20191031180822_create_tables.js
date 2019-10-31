
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 255).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('instructions', 255).notNullable();
      tbl.float('amount').unsigned().notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.string('instruction_name', 255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
