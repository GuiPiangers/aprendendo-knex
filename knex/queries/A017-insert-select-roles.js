import { knex } from "../config/database.js";

const insertSelect = async () => {
    const data = knex(knex.raw('users_roles (user_id, role_id)')).insert(function (){
        this.select('id').from('users').select(qb => {
            qb.select('id').from('roles').orderByRaw('rand()').limit(1)
        })
    }).onConflict().ignore()

    console.log(data.toSQL())
    return await data
};

insertSelect()
    .then((data) => console.log(data))
    .catch(e => console.log(e.message))
    .finally(()=> knex.destroy());