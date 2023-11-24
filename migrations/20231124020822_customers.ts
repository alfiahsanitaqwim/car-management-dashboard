import { Knex } from "knex";

const CUSTOMERS = "customers"

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(CUSTOMERS, (table: Knex.TableBuilder) => {
        table.increments("id_customers").primary();
        table.string("name", 100).notNullable();
        table.string("email").notNullable();
        table.string("photo").notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(CUSTOMERS)
}

