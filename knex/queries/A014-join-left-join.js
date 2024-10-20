import { knex } from "../config/database.js";

const selectLeftJoin = async () => {
    const data = knex('users as u').select(
        'u.id as uid', 
        'p.id as pid', 
        'p.bio', 
        'u.first_name')
        .leftJoin('profiles as p', 'u.id', 'p.user_id')
        
    console.log(data.toQuery());
    return await data
};

selectLeftJoin()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());