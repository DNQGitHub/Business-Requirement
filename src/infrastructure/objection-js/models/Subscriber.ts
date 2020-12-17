import { Model } from 'objection';

export default class Subscriber extends Model {
	static get tableName() {
		return 'subscriber';
	}
}
