import { Router } from 'express';
import HomeController from '../controllers/HomeController';
import SubscriberController from '../controllers/SubscriberController';
import ErrorHandler from '../middlewares/ErrorHandler';

const router = Router();

router.get('/', new HomeController().index);

router.get('/subscribers', new SubscriberController().index);

router.use(ErrorHandler);

export default router;
