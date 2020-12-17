import ISubscriberDao from '@domain/daos/ISubscriberDao';
import SubscriberEntity from '@domain/entities/Subscriber';
import { PartialModelObject, QueryBuilder } from 'objection';
import SubscriberModel from '../models/Subscriber';
import Dao from './Dao';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export default class SubscriberDao extends Dao<SubscriberEntity, SubscriberModel> implements ISubscriberDao {
	initQuery(): QueryBuilder<SubscriberModel, SubscriberModel[]> {
		return SubscriberModel.query();
	}

	convertModelToEntity(model: SubscriberModel) {
		if (model === null || model === undefined) return null;

		const dbJson = model.$toDatabaseJson();

		const entity = SubscriberEntity.create(
			{
				name: dbJson['name'],
				email: dbJson['email'],
				phoneNumber: dbJson['phone_number'],
				imageUrl: dbJson['image_url'],
				createdDate: dbJson['created_at'],
				updatedDate: dbJson['updated_at'],
			},
			dbJson['id']
		);

		return entity;
	}

	convertEntityToPartialModelObject(entity: SubscriberEntity): PartialModelObject<SubscriberModel> {
		const model = new SubscriberModel();

		model.$set({
			id: entity.id,
			name: entity.name,
			email: entity.email,
			phone_number: entity.phoneNumber,
			image_url: entity.imageUrl,
			created_at: entity.createdDate,
			updated_at: entity.updatedDate,
		});

		return model;
	}

	async findOneByEmail(email: string): Promise<SubscriberEntity | null> {
		const query = this.initQuery();

		const model = await query.findOne('email', '=', email);

		return this.convertModelToEntity(model);
	}
}
