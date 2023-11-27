import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("customers").del();

    // Inserts seed entries
    await knex("customers").insert([
        { id_customers: 1, name: "Wahyu", email: "one@mail.com", photo: "https:img.png" },
        { id_customers: 2, name: "Agus", email: "two@mail.com", photo: "https:img.png" },
        { id_customers: 3, name: "Arifin", email: "three@mail.com", photo: "https:img.png" }
    ]);
};
