import 'reflect-metadata';
import { injectable } from 'inversify';
import Handler from './Handler';

@injectable()
export default abstract class CommandHandler<Command> extends Handler<Command> {}
