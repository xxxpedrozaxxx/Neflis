// ===========================
// ENTIDAD - MI LISTA
// ===========================

export interface MyListItem {
  id: string;
  userId: string;
  contentId: string;
  addedAt: Date;
}

export interface MyListItemCreateDTO {
  userId: string;
  contentId: string;
}
