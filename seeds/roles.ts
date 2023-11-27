import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("roles").del();

    // Inserts seed entries
    await knex("roles").insert([
        { id: 1, name: "super_admin" },
        { id: 2, name: "admin" },
        { id: 3, name: "member" }
    ]);
};
