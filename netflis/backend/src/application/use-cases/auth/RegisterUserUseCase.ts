// ===========================
// CASO DE USO - REGISTRO DE USUARIO
// ===========================

import bcrypt from 'bcryptjs';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User, UserCreateDTO } from '../../domain/entities/User';

export class RegisterUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: UserCreateDTO): Promise<User> {
    // Verificar si el usuario ya existe
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('El email ya está registrado');
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Crear usuario
    const newUser = await this.userRepository.create({
      ...userData,
      password: hashedPassword
    });

    return newUser;
  }
}
