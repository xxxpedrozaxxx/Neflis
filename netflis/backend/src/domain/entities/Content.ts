// ===========================
// ENTIDADES DEL DOMINIO - CONTENIDO
// ===========================

export enum ContentType {
  MOVIE = 'movie',
  SERIES = 'series'
}

export enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  HORROR = 'horror',
  ROMANCE = 'romance',
  SCIFI = 'sci-fi',
  FANTASY = 'fantasy',
  THRILLER = 'thriller',
  ANIME = 'anime',
  DOCUMENTARY = 'documentary'
}

export interface Content {
  id: string;
  title: string;
  description: string;
  type: ContentType;
  genre: Genre[];
  imageUrl: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  year: number;
  duration?: string; // Para películas: "2h 30m"
  episodes?: number; // Para series
  seasons?: number; // Para series
  rating?: number; // 0-10
  featured?: boolean; // Destacado en hero
  createdAt: Date;
  updatedAt: Date;
}

export interface ContentCreateDTO {
  title: string;
  description: string;
  type: ContentType;
  genre: Genre[];
  imageUrl: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  year: number;
  duration?: string;
  episodes?: number;
  seasons?: number;
  rating?: number;
  featured?: boolean;
}

export interface ContentResponseDTO {
  id: string;
  title: string;
  description: string;
  type: ContentType;
  genre: Genre[];
  imageUrl: string;
  thumbnailUrl?: string;
  year: number;
  duration?: string;
  episodes?: number;
  seasons?: number;
  rating?: number;
  featured?: boolean;
}
