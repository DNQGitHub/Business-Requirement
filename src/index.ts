import '@infrastructure/core'; // Must be the first import
import app from '@infrastructure/core/server';
import logger from '@infrastructure/logger/Logger';

// Start the server
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
	logger.info(`Express server started on ${process.env.HOST}:${process.env.PORT}`);
});
