/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('profiles', (table)=>{
      table.increments('id').primary()
      table.text('bio')
      table.text('description')
      table.integer('user_id').unique().unsigned()
      table.foreign('user_id').references('users.id')
        .onDelete('CASCADE')   
        .onUpdate('CASCADE')

    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = function(knex) {
    return knex.schema.dropTable('profiles')
  };
  