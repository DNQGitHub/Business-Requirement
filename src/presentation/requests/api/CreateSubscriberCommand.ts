import { Request } from 'express';

export interface ICreateSubscriberCommand {
	name: string;
	email: string;
	phoneNumber: string;
	image: Express.Multer.File;
}

export default class CreateSubscriberCommand implements ICreateSubscriberCommand {
	private _name: string;
	private _email: string;
	private _phoneNumber: string;
	private _image: Express.Multer.File;

	constructor(req: Request) {
		const { name, email, phoneNumber } = req.body;
		const image = req.file;

		this._name = name;
		this._email = email;
		this._phoneNumber = phoneNumber;
		this._image = image;
	}

	get name() {
		return this._name;
	}

	get email() {
		return this._email;
	}

	get phoneNumber() {
		return this._phoneNumber;
	}

	get image() {
		return this._image;
	}
}
