import { Router } from 'express';
import SubscriberController from '../controllers/SubscriberController';
import ErrorHandler from '../middlewares/ErrorHandler';
import Upload from '@infrastructure/multer/upload';

const router = Router();

router.post('/subscribers', Upload.single('image'), new SubscriberController().createSubscriber);

router.get('/subscribers', new SubscriberController().listAllSubscribers);

router.use(ErrorHandler);

export default router;
