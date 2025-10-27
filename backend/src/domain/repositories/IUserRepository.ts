// ===========================
// REPOSITORIO - USUARIO (Interfaz)
// ===========================

import { User, UserCreateDTO } from '../entities/User';

export interface IUserRepository {
  create(userData: UserCreateDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, userData: Partial<User>): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}
