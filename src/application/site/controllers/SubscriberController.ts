import { NextFunction, Request, Response } from 'express';

export default class SubscriberController {
	index(req: Request, res: Response, next: NextFunction) {
		res.render('subscribers/html.ejs');
	}
}
