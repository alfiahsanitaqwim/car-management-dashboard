import type { Knex } from "knex";

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "cars_c6", 
      user: "alfiahsanitaqwim", 
      password: "root"
      // filename: "./dev.sqlite3"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
