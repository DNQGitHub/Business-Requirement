import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import '@infrastructure/objection-js';
import '@infrastructure/i18n';
import routes from '@application/routes';

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');
app.set('views', ['src/presentation']);

app.set('trust proxy', 1);

// Show routes called in console during development
if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}

// Security
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
);

app.use(routes);

export default app;
