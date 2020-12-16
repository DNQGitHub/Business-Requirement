import { Container } from 'inversify';
import 'reflect-metadata';
import ErrorCollector from '@infrastructure/utilities/ErrorCollector';
import Nodemailer from '@infrastructure/nodemailer';

const container = new Container({
	autoBindInjectable: true,
	skipBaseClassChecks: true,
});

// Utilities
container.bind<ErrorCollector>('ErrorCollector').to(ErrorCollector);

// Mail
container.bind<Nodemailer>('Nodemailer').to(Nodemailer);

export default container;
