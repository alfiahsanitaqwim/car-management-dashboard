import { Knex } from "knex";

const USERS = "users"

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(USERS, (table: Knex.TableBuilder) => {
        table.increments("id").primary();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.integer("id_role").unsigned();

        table.foreign('id_role').references('id').inTable('roles');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(USERS)
}

