// ===========================
// IMPLEMENTACIÓN - USER REPOSITORY
// ===========================

import { Pool } from 'pg';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User, UserCreateDTO } from '../../domain/entities/User';

export class PostgresUserRepository implements IUserRepository {
  constructor(private pool: Pool) {}

  async create(userData: UserCreateDTO): Promise<User> {
    const query = `
      INSERT INTO users (email, password, name)
      VALUES ($1, $2, $3)
      RETURNING id, email, password, name, profile_image, created_at, updated_at
    `;
    
    const result = await this.pool.query(query, [
      userData.email,
      userData.password,
      userData.name
    ]);

    return this.mapRowToUser(result.rows[0]);
  }

  async findById(id: string): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await this.pool.query(query, [id]);
    
    if (result.rows.length === 0) return null;
    return this.mapRowToUser(result.rows[0]);
  }

  async findByEmail(email: string): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await this.pool.query(query, [email]);
    
    if (result.rows.length === 0) return null;
    return this.mapRowToUser(result.rows[0]);
  }

  async update(id: string, userData: Partial<User>): Promise<User | null> {
    const fields: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    if (userData.name) {
      fields.push(`name = $${paramCount++}`);
      values.push(userData.name);
    }
    if (userData.profileImage !== undefined) {
      fields.push(`profile_image = $${paramCount++}`);
      values.push(userData.profileImage);
    }

    if (fields.length === 0) return null;

    values.push(id);
    const query = `
      UPDATE users 
      SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $${paramCount}
      RETURNING *
    `;

    const result = await this.pool.query(query, values);
    if (result.rows.length === 0) return null;
    return this.mapRowToUser(result.rows[0]);
  }

  async delete(id: string): Promise<boolean> {
    const query = 'DELETE FROM users WHERE id = $1';
    const result = await this.pool.query(query, [id]);
    return result.rowCount !== null && result.rowCount > 0;
  }

  private mapRowToUser(row: any): User {
    return {
      id: row.id,
      email: row.email,
      password: row.password,
      name: row.name,
      profileImage: row.profile_image,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    };
  }
}
