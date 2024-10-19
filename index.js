import { knex } from "./knex/config/database.js";

knex('users')
    .then(data => console.log(data))
    .finally(() => knex.destroy());