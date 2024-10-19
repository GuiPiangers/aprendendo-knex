import { knex } from "../config/database.js";

const data = [{
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane@example.com',
    password_hash: 'password456',
    salary: 60000
}, {
    first_name: 'Bob',
    last_name: 'Smith',
    email: 'bob@example.com',
    password_hash: 'password789',
    salary: 70000
}, {
    first_name: 'Alice',
    last_name: 'Johnson',
    email: 'alice@example.com',
    password_hash: 'passwordabc',
    salary: 8000.50
}, {
    first_name: 'Charlie',
    last_name: 'Brown',
    email: 'charlie@example.com',
    password_hash: 'passworddef',
    salary: 9000.80
}, {
    first_name: 'Emily',
    last_name: 'Davis',
    email: 'emily@example.com',
    password_hash: 'passwordghi',
    salary: 10000
}, {
    first_name: 'David',
    last_name: 'Wilson',
    email: 'david@example.com',
    password_hash: 'passwordjkl',
    salary: 2000.10
}
];

const insert = async () => {
    await knex('users').insert(data);
};

insert()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => knex.destroy());