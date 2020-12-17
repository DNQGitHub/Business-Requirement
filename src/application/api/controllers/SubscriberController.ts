import { NextFunction, Request, Response } from 'express';

export default class SubscriberController {
	createSubscriber(req: Request, res: Response, next: NextFunction) {
		res.json({});
	}

	listAllSubscribers(req: Request, res: Response, next: NextFunction) {
		res.json({});
	}
}
