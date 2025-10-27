// ===========================
// CONTROLADOR - CONTENIDO
// ===========================

import { Request, Response } from 'express';
import { GetContentByTypeUseCase } from '../../application/use-cases/content/GetContentByTypeUseCase';
import { GetFeaturedContentUseCase } from '../../application/use-cases/content/GetFeaturedContentUseCase';
import { ContentType } from '../../domain/entities/Content';

export class ContentController {
  constructor(
    private getContentByTypeUseCase: GetContentByTypeUseCase,
    private getFeaturedContentUseCase: GetFeaturedContentUseCase
  ) {}

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const type = req.query.type as ContentType;
      
      if (type) {
        const content = await this.getContentByTypeUseCase.execute(type);
        res.json(content);
      } else {
        res.status(400).json({ error: 'Tipo de contenido requerido' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  getFeatured = async (req: Request, res: Response): Promise<void> => {
    try {
      const featured = await this.getFeaturedContentUseCase.execute();
      res.json(featured);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}
