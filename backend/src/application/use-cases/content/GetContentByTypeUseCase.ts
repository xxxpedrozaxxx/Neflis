// ===========================
// CASO DE USO - OBTENER CONTENIDO POR TIPO
// ===========================

import { IContentRepository } from '../../domain/repositories/IContentRepository';
import { Content, ContentType } from '../../domain/entities/Content';

export class GetContentByTypeUseCase {
  constructor(private contentRepository: IContentRepository) {}

  async execute(type: ContentType): Promise<Content[]> {
    const content = await this.contentRepository.findByType(type);
    return content;
  }
}
