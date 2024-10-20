import { knex } from "../config/database.js";

const updateJoin = async () => {
    const data = knex('users as u')
    .join('profiles as p', 'u.id', 'p.user_id')
    .update({
        'p.bio': knex.raw('CONCAT(p.bio, " atualizado")'),
    }).where('u.first_name', "=" ,'David')

    console.log(data.toSQL())
    return await data
};

updateJoin()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy())