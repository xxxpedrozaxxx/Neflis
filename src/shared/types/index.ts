// ===========================
// TIPOS COMPARTIDOS - FRONTEND
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
  thumbnailUrl?: string;
  year: number;
  duration?: string;
  episodes?: number;
  seasons?: number;
  rating?: number;
  featured?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}
