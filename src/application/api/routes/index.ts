import { Router } from 'express';
import SubscriberController from '../controllers/SubscriberController';

import ErrorHandler from '../middlewares/ErrorHandler';

const router = Router();

router.post('/subscribers', new SubscriberController().createSubscriber);

router.get('/subscribers', new SubscriberController().listAllSubscribers);

router.use(ErrorHandler);

export default router;
