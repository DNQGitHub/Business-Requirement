import { Router } from 'express';
import siteRoutes from './site/routes';
import apiRoutes from './api/routes';
import docsRoutes from './docs/routes';

const router = Router();

router.use(siteRoutes);
router.use('/api', apiRoutes);
router.use('/swagger-docs', docsRoutes);

export default router;
