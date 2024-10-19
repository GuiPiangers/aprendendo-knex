import {knex} from "../config/database.js";

knex('users')
    .then(data => console.log(data))
    .finally(() => knex.destroy());