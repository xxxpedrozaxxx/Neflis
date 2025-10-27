// ===========================
// SERVICIO DE MI LISTA
// ===========================

import { httpClient } from '../../../shared/utils/httpClient';
import { API_ENDPOINTS } from '../../../shared/config/api';
import { Content } from '../../../shared/types';

export class MyListService {
  async getMyList(): Promise<Content[]> {
    return httpClient.get<Content[]>(API_ENDPOINTS.MY_LIST);
  }

  async addToList(contentId: string): Promise<void> {
    await httpClient.post(API_ENDPOINTS.MY_LIST, { contentId });
  }

  async removeFromList(contentId: string): Promise<void> {
    await httpClient.delete(`${API_ENDPOINTS.MY_LIST}/${contentId}`);
  }
}

export const myListService = new MyListService();
