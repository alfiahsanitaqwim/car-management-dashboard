import { Knex } from "knex";

const CAR_TYPES = "car_types"

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(CAR_TYPES).del();

    // Inserts seed entries
    await knex(CAR_TYPES).insert([
        { id_car_types: 1, name: "SUV" },
        { id_car_types: 2, name: "Sedan" },
        { id_car_types: 3, name: "City car" }
    ]);
};
