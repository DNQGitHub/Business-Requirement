import { Container } from 'inversify';
import 'reflect-metadata';
import ErrorCollector from '@infrastructure/utilities/ErrorCollector';
import Nodemailer from '@infrastructure/nodemailer';
import ISubscriberDao from '@domain/daos/ISubscriberDao';
import SubscriberDao from '@infrastructure/objection-js/daos/SubscriberDao';

const container = new Container({
	autoBindInjectable: true,
	skipBaseClassChecks: true,
});

// Utilities
container.bind<ErrorCollector>('ErrorCollector').to(ErrorCollector);

// Mail
container.bind<Nodemailer>('Nodemailer').to(Nodemailer);

// Daos
container.bind<ISubscriberDao>('ISubscriberDao').to(SubscriberDao);

export default container;
