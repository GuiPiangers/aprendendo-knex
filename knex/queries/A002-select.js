import { knex } from "../config/database.js";

const select = async () => {
    const data = knex('users as u').select('u.email as uemail', 'u.first_name');
    console.log(data.toSQL());
    return await data
};

select()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());