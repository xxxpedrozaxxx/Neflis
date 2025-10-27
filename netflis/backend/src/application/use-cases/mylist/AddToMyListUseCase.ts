// ===========================
// CASO DE USO - AGREGAR A MI LISTA
// ===========================

import { IMyListRepository } from '../../domain/repositories/IMyListRepository';
import { MyListItem } from '../../domain/entities/MyList';

export class AddToMyListUseCase {
  constructor(private myListRepository: IMyListRepository) {}

  async execute(userId: string, contentId: string): Promise<MyListItem> {
    // Verificar si ya existe
    const exists = await this.myListRepository.exists(userId, contentId);
    if (exists) {
      throw new Error('El contenido ya está en tu lista');
    }

    const item = await this.myListRepository.add({ userId, contentId });
    return item;
  }
}
