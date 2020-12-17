import 'reflect-metadata';
import { injectable } from 'inversify';
import Handler from './Handler';

@injectable()
export default abstract class QueryHandler<Query> extends Handler<Query> {}
