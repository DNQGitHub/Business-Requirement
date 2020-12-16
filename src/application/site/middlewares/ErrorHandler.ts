import { NextFunction, Request, Response } from 'express';

export default function handle(err: Error, req: Request, res: Response, next: NextFunction) {
	console.log(err.stack);
	return res.send('500 ERROR');
}
