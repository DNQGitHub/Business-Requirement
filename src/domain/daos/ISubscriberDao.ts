import IDao from './IDao';
import Subscriber from '@domain/entities/Subscriber';

export default interface ISubscriberDao extends IDao<Subscriber> {
	findOneByEmail(email: string): Promise<Subscriber | null>;
}
