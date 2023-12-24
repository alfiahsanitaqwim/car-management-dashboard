import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	await knex('car_brands').del();

	await knex('car_brands').insert([
		{ id_car_brand: 1, name: 'Honda' },
		{ id_car_brand: 2, name: 'Daihatsu' },
		{ id_car_brand: 3, name: 'Toyota' }
	]);
}
