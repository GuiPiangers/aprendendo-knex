import { knex } from "../config/database.js";

const updateUser = async () => {
    const data = knex('users').update({
        first_name: 'Luiz',
        last_name: 'Miranda',
    }).where('id', 2)

    console.log(data.toSQL())
    return await data
};

updateUser()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy())