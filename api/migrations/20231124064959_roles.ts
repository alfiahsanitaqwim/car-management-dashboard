import { Knex } from 'knex';

const ROLES = 'roles';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable(ROLES, (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('name').notNullable();
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable(ROLES);
}

