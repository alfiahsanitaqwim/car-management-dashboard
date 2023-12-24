import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	await knex('car_types').del();

	await knex('car_types').insert([
		{ id_car_types: 1, name: 'sedan' },
		{ id_car_types: 2, name: 'suv' },
		{ id_car_types: 3, name: 'van' }
	]);
}
