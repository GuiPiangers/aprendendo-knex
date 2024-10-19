/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('roles', (table)=>{
      table.increments('id').primary()
      table.string('name', 150).notNullable().unique()
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = function(knex) {
    return knex.schema.dropTable('roles')
  };
  