import CreateSubscriberCommand from '@presentation/requests/api/CreateSubscriberCommand';
import IoC from '@infrastructure/inversify';
import { NextFunction, Request, Response } from 'express';
import CreateSubscriberCommandHandler from '../command-handlers/CreateSubscriberCommandHandler';
import ListAllSubscribersQueryHandler from '../query-handlers/ListAllSubscribersQueryHandler';

export default class SubscriberController {
	async createSubscriber(req: Request, res: Response, next: NextFunction) {
		const command = new CreateSubscriberCommand(req);
		const commandHandler = IoC.get(CreateSubscriberCommandHandler);
		await commandHandler.handle(command);

		res.json({
			success: true,
		});
	}

	async listAllSubscribers(req: Request, res: Response, next: NextFunction) {
		const queryHandler = IoC.get(ListAllSubscribersQueryHandler);
		const subscribers = await queryHandler.handle(null);

		res.json({
			success: true,
			subscribers: subscribers,
		});
	}
}
