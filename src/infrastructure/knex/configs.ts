import '../core';

const configs = JSON.parse(`{
    "debug": ${process.env.DEBUG},
    "migrations": {
        "directory": "./migrations",
        "disableMigrationsListValidation": true
    },
    "client": "${process.env.KNEX_CLIENT}",
    "connection": {
        "host": "${process.env.KNEX_DB_HOST}",
        "port": "${process.env.KNEX_DB_PORT}",
        "user": "${process.env.KNEX_DB_USERNAME}",
        "password": "${process.env.KNEX_DB_PASSWORD}",
        "database": "${process.env.KNEX_DB_NAME}"
    }
}`);

module.exports = configs;
export default configs;
