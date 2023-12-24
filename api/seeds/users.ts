import { Knex } from 'knex';
import encryptPassword from '../src/utilities/encryptPassword';

export async function seed(knex: Knex): Promise<void> {
	await knex('users').del();

	const encryptedPassword = await encryptPassword('12345');

	await knex('users').insert([
		{ id: 1, email: 'superadmin@mail.com', password: encryptedPassword, id_role: 1}
	]);
}
