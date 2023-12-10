import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("car_brands").del();
    // Inserts seed entries
    await knex("car_brands").insert([
        { id_car_brand: 1, name: "Honda" },
        { id_car_brand: 2, name: "Daihatsu" },
        { id_car_brand: 3, name: "Toyota" }
    ]);
};
