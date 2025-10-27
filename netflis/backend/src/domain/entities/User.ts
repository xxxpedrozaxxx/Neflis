// ===========================
// ENTIDADES DEL DOMINIO
// ===========================

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreateDTO {
  email: string;
  password: string;
  name: string;
}

export interface UserLoginDTO {
  email: string;
  password: string;
}

export interface UserResponseDTO {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
}
