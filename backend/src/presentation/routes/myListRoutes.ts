// ===========================
// RUTAS - MI LISTA
// ===========================

import { Router } from 'express';
import { MyListController } from '../controllers/MyListController';
import { authMiddleware } from '../middleware/authMiddleware';

export const createMyListRoutes = (myListController: MyListController): Router => {
  const router = Router();

  router.post('/', authMiddleware, myListController.add);
  router.get('/', authMiddleware, myListController.getList);
  router.delete('/:contentId', authMiddleware, myListController.remove);

  return router;
};
