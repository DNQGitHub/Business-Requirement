import { IEntity } from '@domain/entities/Entity';

export default interface IDao<T extends IEntity> {
	insert(entity: T): Promise<T>;
	findOneById(id: string): Promise<T | null>;
	all(): Promise<Array<T>>;
	count(): Promise<number>;
	delete(entity: T): Promise<T>;
	update(entity: T): Promise<T>;
}
