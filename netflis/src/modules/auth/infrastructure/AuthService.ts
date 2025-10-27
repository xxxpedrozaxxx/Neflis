// ===========================
// SERVICIO DE AUTENTICACIÓN
// ===========================

import { httpClient } from '../../../shared/utils/httpClient';
import { API_ENDPOINTS } from '../../../shared/config/api';
import { AuthResponse, LoginCredentials, RegisterData } from '../../../shared/types';

export class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await httpClient.post<AuthResponse>(
      API_ENDPOINTS.LOGIN,
      credentials
    );
    
    // Guardar token
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    
    return response;
  }

  async register(data: RegisterData): Promise<void> {
    await httpClient.post(API_ENDPOINTS.REGISTER, data);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

export const authService = new AuthService();
