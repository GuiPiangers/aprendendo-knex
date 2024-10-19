/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('users', (table)=>{
    table.increments('id').primary()
    table.string('first_name', 150).notNullable()
    table.string('last_name', 150)
    table.string('email').notNullable().unique()
    table.string('password_hash', 255).notNullable()
    table.decimal('salary', 15, 2).notNullable()
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('users')
};
