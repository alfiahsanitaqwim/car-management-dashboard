import { Knex } from 'knex';

const CARS = 'cars';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable(CARS, (table: Knex.TableBuilder) => {
		table.increments('id_cars').primary();
		table.string('car_name', 100).notNullable();
		table.boolean('availability').notNullable();
		table.integer('capacity', 11).notNullable();
		table.string('image_url').notNullable();
		table.integer('price', 11).notNullable();
		table.string('description').notNullable();
		table.integer('id_car_type', 2).unsigned();
		table.integer('id_car_brand', 2).unsigned();
		table.integer('id_customer', 2).unsigned();

		// Add the foreign key constraint
		table.foreign('id_car_type').references('id_car_types').inTable('car_types');
		table.foreign('id_car_brand').references('id_car_brand').inTable('car_brands');
		table.foreign('id_customer').references('id').inTable('customers');
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable(CARS);
}

