export default {
	// Host name for database connection:
	host: process.env.KNEX_DB_HOST,
	// Port number for database connection:
	port: process.env.KNEX_DB_PORT,
	// Database user:
	user: process.env.KNEX_DB_USERNAME,
	// Password for the above database user:
	password: process.env.KNEX_DB_PASSWORD,
	// Database name:
	database: process.env.KNEX_DB_NAME,
	// Whether or not to automatically check for and clear expired sessions:
	clearExpired: true,
	// How frequently expired sessions will be cleared; milliseconds:
	checkExpirationInterval: 900000,
	// The maximum age of a valid session; milliseconds:
	expiration: process.env.SESSION_COOKIE_MAX_AGE,
	// Whether or not to create the sessions database table, if one does not already exist:
	createDatabaseTable: true,
	// Number of connections when creating a connection pool:
	connectionLimit: 1,
	// Whether or not to end the database connection when the store is closed.
	// The default value of this option depends on whether or not a connection was passed to the constructor.
	// If a connection object is passed to the constructor, the default value for this option is false.
	endConnectionOnClose: true,
	schema: {
		tableName: 'sessions',
		columnNames: {
			session_id: 'session_id',
			expires: 'expires',
			data: 'data',
		},
	},
};
