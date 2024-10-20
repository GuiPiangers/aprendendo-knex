import { knex } from "../config/database.js";

const insertRoles = async () => {
    const data = knex('roles')
        .insert([
            { name: 'POST' },
            { name: 'PUT' },
            { name: 'DELETE' },
            { name: 'GET' }
        ])
        
    console.log(data.toQuery());
    return await data
};

insertRoles()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());