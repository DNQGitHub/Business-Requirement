import { Router } from 'express';
import HomeController from '../controllers/HomeController';
import ErrorHandler from '../middlewares/ErrorHandler';

const router = Router();

router.get('/', new HomeController().index);

router.use(ErrorHandler);

export default router;
