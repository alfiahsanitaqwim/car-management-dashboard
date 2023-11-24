import { Knex } from "knex";

const USERS = "users"
export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(USERS).del();

    // Inserts seed entries
    await knex(USERS).insert([
        { id: 1, email: "superadmin@mail.com", password: "9090", id_role: 1 }
    ]);
};
