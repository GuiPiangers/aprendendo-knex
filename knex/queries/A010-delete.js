import { knex } from "../config/database.js";

const deleteUser = async () => {
    const data = knex('users').delete().where('id', 1)

    console.log(data.toSQL())
    return await data
};

deleteUser()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());