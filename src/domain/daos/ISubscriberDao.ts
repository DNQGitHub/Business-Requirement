import IDao from './IDao';
import Subscriber from '@domain/entities/Subscriber';

export default interface ISubscriberDao extends IDao<Subscriber> {
	getOneByEmail(email: string): Promise<Subscriber | null>;
}
