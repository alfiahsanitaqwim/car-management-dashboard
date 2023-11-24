import { Knex } from "knex";

const CARS = "cars";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(CARS).del();

    // Inserts seed entries
    await knex(CARS).insert([
        { id_car: 1, car_name: "Avanza", availability: "true", capacity: 4, image_url: "image.com", price: 500000, description: "ini mobil", id_car_type: 1, id_car_brand: 1 },
        { id_car: 2, car_name: "Mazda", availability: "false", capacity: 2, image_url: "image.com", price: 450000, description: "mobil ini", id_car_type: 2, id_car_brand: 2 },
        { id_car: 3, car_name: "Xenia", availability: "true", capacity: 6, image_url: "image.com", price: 700000, description: "mobil nih", id_car_type: 1, id_car_brand: 3 }
    ]);
};
