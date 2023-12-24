import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	await knex('customers').del();

	await knex('customers').insert([
		{ id: 1, name: 'Alfi', email: 'one@mail.com', photo: 'https:img.png' },
		{ id: 2, name: 'Ahsani', email: 'two@mail.com', photo: 'https:img.png' },
		{ id: 3, name: 'Taqwim', email: 'three@mail.com', photo: 'https:img.png' }
	]);
}
