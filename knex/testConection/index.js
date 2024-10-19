import {knex} from "../config/database";

knex('users')
    .then(data => console.log(data))
    .finally(() => knex.destroy());