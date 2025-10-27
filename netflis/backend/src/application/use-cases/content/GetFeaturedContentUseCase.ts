// ===========================
// CASO DE USO - OBTENER CONTENIDO DESTACADO
// ===========================

import { IContentRepository } from '../../domain/repositories/IContentRepository';
import { Content } from '../../domain/entities/Content';

export class GetFeaturedContentUseCase {
  constructor(private contentRepository: IContentRepository) {}

  async execute(): Promise<Content | null> {
    const featured = await this.contentRepository.findFeatured();
    return featured;
  }
}
