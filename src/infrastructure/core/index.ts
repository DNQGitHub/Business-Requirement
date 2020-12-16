import dotenv from 'dotenv';
import logger from '../logger/Logger';
import fs from 'fs-extra';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Set the env file
let envFile = `./env/${process.env.NODE_ENV}.env`;

if (fs.existsSync(envFile) === false) {
	envFile = `../../../env/${process.env.NODE_ENV}.env`;
}

const result = dotenv.config({
	path: envFile,
});

if (result.error) {
	throw result.error;
} else {
	logger.info(`Loaded environment: ${envFile}`);
}
