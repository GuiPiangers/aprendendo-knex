import { knex } from "../config/database.js";

const select = async () => {
    const data = knex(
        knex.raw('users as u, profiles as p'),
    ).select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name').where(
        'u.id', knex.raw('p.user_id')
    );
    console.log(data.toSQL());
    return await data
};

select()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());