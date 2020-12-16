import { Router } from 'express';
import siteRoutes from './site/routes';

const router = Router();

router.use(siteRoutes);

export default router;
