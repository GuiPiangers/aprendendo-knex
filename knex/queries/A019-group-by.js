import { knex } from "../config/database.js";

const groupBy = async () => {
    const data = knex('users as u')
        .select('u.first_name')
        .innerJoin('profiles as p', 'p.user_id', 'u.id')
        .count('u.id as total')
        .groupBy('u.first_name')
        .orderBy('total', 'desc')

    console.log(data.toSQL())
    return await data
};

groupBy()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy())