import { knex } from "../config/database.js";

const select = async () => {
    const data = knex('users').select('*')
        .orderBy('id', 'desc')

    console.log(data.toSQL())
    return await data
};

select()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());