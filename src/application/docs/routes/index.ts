import SwaggerUi from '@infrastructure/swagger';
import { Router } from 'express';
import document from '@infrastructure/swagger/document';

const router = Router();

router.use('/', SwaggerUi.serve);
router.get('/', SwaggerUi.setup(document));

export default router;
