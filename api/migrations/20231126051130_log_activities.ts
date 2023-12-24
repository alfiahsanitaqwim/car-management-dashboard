import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('log_activities', (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.integer('id_user').unsigned();
		table.string('description').notNullable();
        
		table.foreign('id_user').references('id').inTable('users');
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('log_activities');
}

