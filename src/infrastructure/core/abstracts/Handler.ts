import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import EventDispatcher from './EventDispatcher';
import ErrorCollector from '@infrastructure/utilities/ErrorCollector';

@injectable()
export default abstract class Handler<T> extends EventDispatcher {
	@inject('ErrorCollector') protected _ec!: ErrorCollector;

	protected async validate(obj: T): Promise<any> {}

	public abstract async handle(obj: T): Promise<any>;
}
