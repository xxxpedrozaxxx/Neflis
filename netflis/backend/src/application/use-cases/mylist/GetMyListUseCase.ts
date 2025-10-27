// ===========================
// CASO DE USO - OBTENER MI LISTA
// ===========================

import { IMyListRepository } from '../../domain/repositories/IMyListRepository';
import { IContentRepository } from '../../domain/repositories/IContentRepository';
import { Content } from '../../domain/entities/Content';

export class GetMyListUseCase {
  constructor(
    private myListRepository: IMyListRepository,
    private contentRepository: IContentRepository
  ) {}

  async execute(userId: string): Promise<Content[]> {
    const myListItems = await this.myListRepository.findByUserId(userId);
    
    const contentPromises = myListItems.map(item => 
      this.contentRepository.findById(item.contentId)
    );
    
    const contents = await Promise.all(contentPromises);
    return contents.filter(content => content !== null) as Content[];
  }
}
