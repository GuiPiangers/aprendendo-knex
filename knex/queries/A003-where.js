import { knex } from "../config/database.js";

const select = async () => {
    // const data = knex('users').select('*')
    //     .where({first_name: 'Jane'});
    const data = knex('users').select('*')
        .where('id', "=", 1)
        .andWhere('salary', ">", 50000)
        .orWhere('id', "=", 2)
    console.log(data.toSQL())
    return await data
};

select()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());