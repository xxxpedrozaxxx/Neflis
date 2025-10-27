// ===========================
// SERVICIO DE CONTENIDO
// ===========================

import { httpClient } from '../../../shared/utils/httpClient';
import { API_ENDPOINTS } from '../../../shared/config/api';
import { Content, ContentType } from '../../../shared/types';

export class ContentService {
  async getByType(type: ContentType): Promise<Content[]> {
    return httpClient.get<Content[]>(`${API_ENDPOINTS.CONTENT}?type=${type}`);
  }

  async getFeatured(): Promise<Content | null> {
    return httpClient.get<Content | null>(API_ENDPOINTS.FEATURED);
  }

  async getAllMovies(): Promise<Content[]> {
    return this.getByType(ContentType.MOVIE);
  }

  async getAllSeries(): Promise<Content[]> {
    return this.getByType(ContentType.SERIES);
  }
}

export const contentService = new ContentService();
