import { Router } from 'express';
import siteRoutes from './site/routes';
import apiRoutes from './api/routes';

const router = Router();

router.use(siteRoutes);
router.use('/api', apiRoutes);

export default router;
