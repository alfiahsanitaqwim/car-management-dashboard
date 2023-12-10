import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("customers").del();

    // Inserts seed entries
    await knex("customers").insert([
        { id: 1, name: "Alfi", email: "one@mail.com", photo: "https:img.png" },
        { id: 2, name: "Ahsani", email: "two@mail.com", photo: "https:img.png" },
        { id: 3, name: "Taqwim", email: "three@mail.com", photo: "https:img.png" }
    ]);
};
