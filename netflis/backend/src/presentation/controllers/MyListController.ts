// ===========================
// CONTROLADOR - MI LISTA
// ===========================

import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { AddToMyListUseCase } from '../../application/use-cases/mylist/AddToMyListUseCase';
import { GetMyListUseCase } from '../../application/use-cases/mylist/GetMyListUseCase';
import { IMyListRepository } from '../../domain/repositories/IMyListRepository';

export class MyListController {
  constructor(
    private addToMyListUseCase: AddToMyListUseCase,
    private getMyListUseCase: GetMyListUseCase,
    private myListRepository: IMyListRepository
  ) {}

  add = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      const { contentId } = req.body;
      const userId = req.userId!;

      const item = await this.addToMyListUseCase.execute(userId, contentId);
      res.status(201).json(item);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  getList = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      const userId = req.userId!;
      const list = await this.getMyListUseCase.execute(userId);
      res.json(list);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  remove = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      const { contentId } = req.params;
      const userId = req.userId!;

      const removed = await this.myListRepository.remove(userId, contentId);
      
      if (removed) {
        res.json({ message: 'Contenido eliminado de tu lista' });
      } else {
        res.status(404).json({ error: 'Contenido no encontrado en tu lista' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}
