import { knex } from "../config/database.js";

const selectInnerJoin = async () => {
    const data = knex('users as u').select(
        'u.id as uid', 
        'p.id as pid', 
        'p.bio', 
        'u.first_name')
        .innerJoin('profiles as p', 'u.id', 'p.user_id')
        .where('u.first_name', 'like','%a%')
        .orderBy('u.first_name', 'desc')
        .limit(5)

    console.log(data.toQuery());
    return await data
};

selectInnerJoin()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());