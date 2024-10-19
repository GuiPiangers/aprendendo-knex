import knexfile from "../../knexfile";
import knexFn from "knex";

export const knex = knexFn(knexfile);