import { knex } from "../config/database.js";

const data = [{
    first_name: 'Kayne',
    last_name: 'Michel',
    email: 'kaynejane@example.com',
    password_hash: 'password456',
    salary: 60000
}, {
    first_name: 'Sarah',
    last_name: 'Walter',
    email: 'sara@example.com',
    password_hash: 'password789',
    salary: 70000
}, {
    first_name: 'Baybe',
    last_name: 'Johnson',
    email: 'baybe@example.com',
    password_hash: 'passwordabc',
    salary: 8000.50
}, {
    first_name: 'Michel',
    last_name: 'Jackson',
    email: 'mikon@example.com',
    password_hash: 'passworddef',
    salary: 9000.80
}, {
    first_name: 'Emily',
    last_name: 'Brown',
    email: 'emilybrown@example.com',
    password_hash: 'passwordghi',
    salary: 10000
}, {
    first_name: 'Michele',
    last_name: 'Obama',
    email: 'michele@example.com',
    password_hash: 'passwordjkl',
    salary: 30000
}
];

const insert = async () => {
    await knex('users').insert(data);
};

insert()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => knex.destroy());