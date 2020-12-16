import { NextFunction, Request, Response } from 'express';

export default class HomeController {
	index(req: Request, res: Response, next: NextFunction) {
		res.render('home/html.ejs');
	}
}
