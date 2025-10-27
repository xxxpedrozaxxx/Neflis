// ===========================
// CONFIGURACIÓN API
// ===========================

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  
  // Content
  CONTENT: '/content',
  FEATURED: '/content/featured',
  
  // My List
  MY_LIST: '/mylist',
} as const;
