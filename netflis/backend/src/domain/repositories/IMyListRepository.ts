// ===========================
// REPOSITORIO - MI LISTA (Interfaz)
// ===========================

import { MyListItem, MyListItemCreateDTO } from '../entities/MyList';

export interface IMyListRepository {
  add(data: MyListItemCreateDTO): Promise<MyListItem>;
  remove(userId: string, contentId: string): Promise<boolean>;
  findByUserId(userId: string): Promise<MyListItem[]>;
  exists(userId: string, contentId: string): Promise<boolean>;
}
