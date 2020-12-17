import CommandHandler from '@infrastructure/core/abstracts/CommandHandler';
import ValidationError from '@infrastructure/core/errors/ValidationError';
import CreateSubscriberCommand from '@presentation/requests/api/CreateSubscriberCommand';

export default class CreateSubscriberCommandHandler extends CommandHandler<CreateSubscriberCommand> {
	async validate(command: CreateSubscriberCommand) {
		this._ec.collect('name', () => {
			if (!!command.name === false) throw Error('name is emtpy');
		});

		this._ec.collect('email', () => {
			if (!!command.email === false) throw Error('email is emtpy');
			if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim.test(command.email) === false)
				throw Error('email is invalid');
		});

		this._ec.collect('image', () => {
			if (command.image === undefined || command.image === null) throw new Error('image is not uploaded');
			if (command.image.mimetype.indexOf('image') == -1) throw new Error('image is invalid');
		});

		if (this._ec.hasError()) throw new ValidationError(this._ec.errors);
	}

	public async handle(command: CreateSubscriberCommand): Promise<any> {
		await this.validate(command);
	}
}
