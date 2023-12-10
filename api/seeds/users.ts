import { Knex } from "knex";
const  encryptPassword = require("../src/utilities/encryptPassword");

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    const encryptedPassword = await encryptPassword("12345");

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, email: "superadmin@mail.com", password: encryptedPassword, id_role: 1}
    ]);
};
