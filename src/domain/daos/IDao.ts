import { IEntity } from '@domain/entities/Entity';

export default interface IDao<T extends IEntity> {
	insert(entity: T): Promise<T | null>;
	findOneById(id: string): Promise<T | null>;
	all(): Promise<Array<T>>;
	count(): Promise<number>;
	delete(entity: T): Promise<T | null>;
	update(entity: T): Promise<T | null>;
}
