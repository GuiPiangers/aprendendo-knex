import { knex } from "../config/database.js";

const select = async () => {
    const data = knex('users').select('*')
        .where('first_name', 'like', 'J%')

    console.log(data.toSQL())
    return await data
};

select()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());