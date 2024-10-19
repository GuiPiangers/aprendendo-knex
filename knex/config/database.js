import knexfile from "../../knexfile.js";
import knexFn from "knex";

export const knex = knexFn(knexfile);

