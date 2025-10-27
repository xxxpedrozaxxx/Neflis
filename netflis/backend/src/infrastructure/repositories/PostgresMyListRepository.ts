// ===========================
// IMPLEMENTACIÓN - MY LIST REPOSITORY
// ===========================

import { Pool } from 'pg';
import { IMyListRepository } from '../../domain/repositories/IMyListRepository';
import { MyListItem, MyListItemCreateDTO } from '../../domain/entities/MyList';

export class PostgresMyListRepository implements IMyListRepository {
  constructor(private pool: Pool) {}

  async add(data: MyListItemCreateDTO): Promise<MyListItem> {
    const query = `
      INSERT INTO my_list (user_id, content_id)
      VALUES ($1, $2)
      RETURNING id, user_id, content_id, added_at
    `;
    
    const result = await this.pool.query(query, [data.userId, data.contentId]);
    return this.mapRowToMyListItem(result.rows[0]);
  }

  async remove(userId: string, contentId: string): Promise<boolean> {
    const query = 'DELETE FROM my_list WHERE user_id = $1 AND content_id = $2';
    const result = await this.pool.query(query, [userId, contentId]);
    return result.rowCount !== null && result.rowCount > 0;
  }

  async findByUserId(userId: string): Promise<MyListItem[]> {
    const query = 'SELECT * FROM my_list WHERE user_id = $1 ORDER BY added_at DESC';
    const result = await this.pool.query(query, [userId]);
    return result.rows.map(row => this.mapRowToMyListItem(row));
  }

  async exists(userId: string, contentId: string): Promise<boolean> {
    const query = 'SELECT 1 FROM my_list WHERE user_id = $1 AND content_id = $2';
    const result = await this.pool.query(query, [userId, contentId]);
    return result.rows.length > 0;
  }

  private mapRowToMyListItem(row: any): MyListItem {
    return {
      id: row.id,
      userId: row.user_id,
      contentId: row.content_id,
      addedAt: row.added_at
    };
  }
}
