// eslint-disable-next-line node/no-unpublished-require
require('../../dist/infrastructure/core');
const Knex = require('knex');
const { exit } = require('process');

console.log('START CREATE DB');

const knex = Knex({
	client: process.env.KNEX_CLIENT,
	connection: {
		host: process.env.KNEX_DB_HOST,
		port: process.env.KNEX_DB_PORT,
		user: process.env.KNEX_DB_USERNAME,
		password: process.env.KNEX_DB_PASSWORD,
		charset: 'utf8mb4_unicode_ci',
	},
});

const query = `\
    CREATE DATABASE IF NOT EXISTS ${process.env.KNEX_DB_NAME} CHAR SET 'utf8mb4'
`;

knex.raw(query).then(() => {
	console.log('END CREATE DB');
	exit();
});
