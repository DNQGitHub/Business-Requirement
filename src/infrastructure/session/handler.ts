import expressSession from 'express-session';
import expressMySqlStoreConfig from './mysql-storage-config';

const MySqlStore = require('express-mysql-session')(expressSession);
const sessionStore = new MySqlStore(expressMySqlStoreConfig);

const sessionHandler = expressSession({
	secret: process.env.SESSION_SECRET!,
	resave: false,
	saveUninitialized: false,
	store: sessionStore,
	cookie: {
		maxAge: +process.env.SESSION_COOKIE_MAX_AGE!,
		secure: 'auto',
	},
});

export default sessionHandler;
