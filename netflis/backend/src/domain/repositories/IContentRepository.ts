// ===========================
// REPOSITORIO - CONTENIDO (Interfaz)
// ===========================

import { Content, ContentCreateDTO, ContentType, Genre } from '../entities/Content';

export interface IContentRepository {
  create(contentData: ContentCreateDTO): Promise<Content>;
  findById(id: string): Promise<Content | null>;
  findAll(): Promise<Content[]>;
  findByType(type: ContentType): Promise<Content[]>;
  findByGenre(genre: Genre): Promise<Content[]>;
  findFeatured(): Promise<Content | null>;
  update(id: string, contentData: Partial<Content>): Promise<Content | null>;
  delete(id: string): Promise<boolean>;
}
