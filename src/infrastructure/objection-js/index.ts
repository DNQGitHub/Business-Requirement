import knex from 'knex';
import knexConfigs from '@infrastructure/knex/configs';
import { Model } from 'objection';

Model.knex(knex(knexConfigs));
