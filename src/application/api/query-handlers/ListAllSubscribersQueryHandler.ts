import ISubscriberDao from '@domain/daos/ISubscriberDao';
import QueryHandler from '@infrastructure/core/abstracts/QueryHandler';
import { inject, injectable } from 'inversify';

@injectable()
export default class ListAllSubscribersQueryHandler extends QueryHandler<null> {
	@inject('ISubscriberDao') private _subscriberDao!: ISubscriberDao;

	async validate(query: null) {}

	public async handle(query: null): Promise<any> {
		await this.validate(query);

		let subscribers = await this._subscriberDao.all();

		let subscribersDto = subscribers.map(subscriber => {
			return { ...subscriber.props };
		});

		return subscribersDto;
	}
}
