// ===========================
// IMPLEMENTACIÓN - CONTENT REPOSITORY
// ===========================

import { Pool } from 'pg';
import { IContentRepository } from '../../domain/repositories/IContentRepository';
import { Content, ContentCreateDTO, ContentType, Genre } from '../../domain/entities/Content';

export class PostgresContentRepository implements IContentRepository {
  constructor(private pool: Pool) {}

  async create(contentData: ContentCreateDTO): Promise<Content> {
    const query = `
      INSERT INTO content (title, description, type, genre, image_url, video_url, thumbnail_url, 
                          year, duration, episodes, seasons, rating, featured)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *
    `;
    
    const result = await this.pool.query(query, [
      contentData.title,
      contentData.description,
      contentData.type,
      contentData.genre,
      contentData.imageUrl,
      contentData.videoUrl,
      contentData.thumbnailUrl,
      contentData.year,
      contentData.duration,
      contentData.episodes,
      contentData.seasons,
      contentData.rating,
      contentData.featured || false
    ]);

    return this.mapRowToContent(result.rows[0]);
  }

  async findById(id: string): Promise<Content | null> {
    const query = 'SELECT * FROM content WHERE id = $1';
    const result = await this.pool.query(query, [id]);
    
    if (result.rows.length === 0) return null;
    return this.mapRowToContent(result.rows[0]);
  }

  async findAll(): Promise<Content[]> {
    const query = 'SELECT * FROM content ORDER BY created_at DESC';
    const result = await this.pool.query(query);
    return result.rows.map(row => this.mapRowToContent(row));
  }

  async findByType(type: ContentType): Promise<Content[]> {
    const query = 'SELECT * FROM content WHERE type = $1 ORDER BY created_at DESC';
    const result = await this.pool.query(query, [type]);
    return result.rows.map(row => this.mapRowToContent(row));
  }

  async findByGenre(genre: Genre): Promise<Content[]> {
    const query = 'SELECT * FROM content WHERE $1 = ANY(genre) ORDER BY created_at DESC';
    const result = await this.pool.query(query, [genre]);
    return result.rows.map(row => this.mapRowToContent(row));
  }

  async findFeatured(): Promise<Content | null> {
    const query = 'SELECT * FROM content WHERE featured = true LIMIT 1';
    const result = await this.pool.query(query);
    
    if (result.rows.length === 0) return null;
    return this.mapRowToContent(result.rows[0]);
  }

  async update(id: string, contentData: Partial<Content>): Promise<Content | null> {
    const fields: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    // Agregar campos dinámicamente
    if (contentData.title) {
      fields.push(`title = $${paramCount++}`);
      values.push(contentData.title);
    }
    if (contentData.description) {
      fields.push(`description = $${paramCount++}`);
      values.push(contentData.description);
    }
    // ... más campos según necesidad

    if (fields.length === 0) return null;

    values.push(id);
    const query = `
      UPDATE content 
      SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $${paramCount}
      RETURNING *
    `;

    const result = await this.pool.query(query, values);
    if (result.rows.length === 0) return null;
    return this.mapRowToContent(result.rows[0]);
  }

  async delete(id: string): Promise<boolean> {
    const query = 'DELETE FROM content WHERE id = $1';
    const result = await this.pool.query(query, [id]);
    return result.rowCount !== null && result.rowCount > 0;
  }

  private mapRowToContent(row: any): Content {
    return {
      id: row.id,
      title: row.title,
      description: row.description,
      type: row.type as ContentType,
      genre: row.genre as Genre[],
      imageUrl: row.image_url,
      videoUrl: row.video_url,
      thumbnailUrl: row.thumbnail_url,
      year: row.year,
      duration: row.duration,
      episodes: row.episodes,
      seasons: row.seasons,
      rating: row.rating,
      featured: row.featured,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    };
  }
}
