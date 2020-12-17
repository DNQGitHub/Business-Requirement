import IDao from '@domain/daos/IDao';
import { Model, QueryBuilder, PartialModelObject, MaybeCompositeId, Expression } from 'objection';
import { IEntity } from '@domain/entities/Entity';

export default abstract class Dao<T extends IEntity, M extends Model> implements IDao<T> {
	protected abstract initQuery(): QueryBuilder<M, M[]>;
	protected abstract convertModelToEntity(model: M): T | null;
	protected abstract convertEntityToPartialModelObject(entity: T): PartialModelObject<M>;

	async insert(entity: T): Promise<T | null> {
		let partialModelObject = this.convertEntityToPartialModelObject(entity);

		let model = await this.initQuery().insert(partialModelObject);

		return this.convertModelToEntity(model);
	}

	async findOneById(id: string): Promise<T | null> {
		const model = await this.initQuery().findById(id).execute();

		const entity = this.convertModelToEntity(model);

		return entity;
	}

	async all(): Promise<T[]> {
		const entities: Array<T> = [];

		const models = await this.initQuery().execute();

		for (const model of models) {
			const entity = this.convertModelToEntity(model);
			if (entity !== null) entities.push(entity);
		}

		return entities;
	}

	async countAll(): Promise<number> {
		const query = this.initQuery();

		query.count('id', { as: 'count' });

		const result: any = await query.execute();

		return result[0]['count'];
	}

	async update(entity: T): Promise<T | null> {
		let model = this.convertEntityToPartialModelObject(entity);

		let result = await this.initQuery()
			.where('id', '=', entity.id as Expression<string>)
			.update(model)
			.execute();

		if (result <= 0) throw new Error('update entity error');

		return entity;
	}

	async delete(entity: T): Promise<T | null> {
		let result = await this.initQuery()
			.deleteById(entity.id as MaybeCompositeId)
			.execute();

		if (result <= 0) throw new Error('delete entity error');

		return entity;
	}
}
