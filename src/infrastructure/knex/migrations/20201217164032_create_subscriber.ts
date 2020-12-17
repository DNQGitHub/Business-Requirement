import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable('subscriber', table => {
		table.increments('id').primary();
		table.string('name');
		table.string('email');
		table.string('phone_number');
		table.string('image_uri');
	});
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable('subscriber');
}
