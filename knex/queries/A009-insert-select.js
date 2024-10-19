import { knex } from "../config/database.js";

const insertSelect = async () => {
    const data = knex(knex.raw('profiles (bio, description, user_id)')).insert(function (){
        this.from('users').select(
            knex.raw('concat("Bio de ", ??)', ['first_name']), 
            knex.raw('concat("Descrição de ", ??)', ['last_name']), 
            'id'
        )
    })

    console.log(data.toSQL())
    return await data
};

insertSelect()
    .then((data) => console.log(data))
    .finally(()=> knex.destroy());