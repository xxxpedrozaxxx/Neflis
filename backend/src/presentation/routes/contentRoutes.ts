// ===========================
// RUTAS - CONTENIDO
// ===========================

import { Router } from 'express';
import { ContentController } from '../controllers/ContentController';
import { authMiddleware } from '../middleware/authMiddleware';

export const createContentRoutes = (contentController: ContentController): Router => {
  const router = Router();

  router.get('/', authMiddleware, contentController.getAll);
  router.get('/featured', authMiddleware, contentController.getFeatured);

  return router;
};
