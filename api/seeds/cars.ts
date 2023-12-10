import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        {
            id_cars: 1,
            car_name: "Brio",
            availability: true,
            capacity: 4,
            image_url: "https:img.jpg",
            price: 2,
            description: "description",
            id_car_type: 1,
            id_car_brand: 1,
            id_customer: 1
        },
        {
            id_cars: 2,
            car_name: "Toyota",
            availability: true,
            capacity: 4,
            image_url: "https:img.jpg",
            price: 3,
            description: "description",
            id_car_type: 1,
            id_car_brand: 1,
            id_customer: 1
        },
    ]);
};
