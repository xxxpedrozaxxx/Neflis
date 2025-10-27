// ===========================
// SCRIPT - DATOS DE PRUEBA
// ===========================

import pool from '../infrastructure/database/connection';
import { ContentType, Genre } from '../domain/entities/Content';

const sampleData = [
  // PELÍCULAS
  {
    title: 'Ciudad Nocturna',
    description: 'Una historia épica sobre secretos, traición y redención en las calles más oscuras de la ciudad.',
    type: ContentType.MOVIE,
    genre: [Genre.DRAMA, Genre.THRILLER],
    imageUrl: 'https://images.unsplash.com/photo-1673095288333-ac62dbbad575?w=1080',
    year: 2024,
    duration: '2h 30m',
    rating: 8.5,
    featured: true
  },
  {
    title: 'Acción Extrema',
    description: 'Un agente especial debe detener una conspiración global antes de que sea demasiado tarde.',
    type: ContentType.MOVIE,
    genre: [Genre.ACTION],
    imageUrl: 'https://images.unsplash.com/photo-1739891251370-05b62a54697b?w=1080',
    year: 2024,
    duration: '1h 55m',
    rating: 7.8
  },
  {
    title: 'Thriller Oscuro',
    description: 'Un detective investiga una serie de crímenes que lo llevan a descubrir su propio pasado.',
    type: ContentType.MOVIE,
    genre: [Genre.THRILLER, Genre.HORROR],
    imageUrl: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?w=1080',
    year: 2023,
    duration: '2h 10m',
    rating: 8.2
  },
  {
    title: 'Comedia Loca',
    description: 'Dos amigos se embarcan en una aventura hilarante para salvar su negocio.',
    type: ContentType.MOVIE,
    genre: [Genre.COMEDY],
    imageUrl: 'https://images.unsplash.com/photo-1760007416920-7074ed2da3d7?w=1080',
    year: 2024,
    duration: '1h 40m',
    rating: 7.5
  },
  {
    title: 'Amor Eterno',
    description: 'Una hermosa historia de amor que trasciende el tiempo y el espacio.',
    type: ContentType.MOVIE,
    genre: [Genre.ROMANCE, Genre.DRAMA],
    imageUrl: 'https://images.unsplash.com/photo-1627964464837-6328f5931576?w=1080',
    year: 2024,
    duration: '2h 5m',
    rating: 8.0
  },
  {
    title: 'Terror Nocturno',
    description: 'Una casa embrujada guarda secretos aterradores que nadie debería descubrir.',
    type: ContentType.MOVIE,
    genre: [Genre.HORROR],
    imageUrl: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?w=1080',
    year: 2023,
    duration: '1h 50m',
    rating: 7.3
  },

  // SERIES
  {
    title: 'Agentes Especiales',
    description: 'Un equipo de élite realiza misiones secretas alrededor del mundo.',
    type: ContentType.SERIES,
    genre: [Genre.ACTION, Genre.THRILLER],
    imageUrl: 'https://images.unsplash.com/photo-1693645325862-cf4fc2db0e29?w=1080',
    year: 2024,
    episodes: 10,
    seasons: 1,
    rating: 8.7
  },
  {
    title: 'Drama Profundo',
    description: 'Una familia enfrenta secretos y mentiras que amenazan con destruir todo.',
    type: ContentType.SERIES,
    genre: [Genre.DRAMA],
    imageUrl: 'https://images.unsplash.com/photo-1715322608224-a9efaeeffaf7?w=1080',
    year: 2023,
    episodes: 8,
    seasons: 2,
    rating: 8.9
  },
  {
    title: 'Risas en Casa',
    description: 'Una comedia familiar sobre las situaciones cotidianas más divertidas.',
    type: ContentType.SERIES,
    genre: [Genre.COMEDY],
    imageUrl: 'https://images.unsplash.com/photo-1584695039819-4164ec9af8f7?w=1080',
    year: 2024,
    episodes: 12,
    seasons: 1,
    rating: 7.9
  },
  {
    title: 'Anime Épico',
    description: 'Héroes jóvenes luchan por salvar su mundo de las fuerzas oscuras.',
    type: ContentType.SERIES,
    genre: [Genre.ANIME, Genre.FANTASY],
    imageUrl: 'https://images.unsplash.com/photo-1761129386720-82a53e04d9b7?w=1080',
    year: 2024,
    episodes: 24,
    seasons: 1,
    rating: 9.1
  }
];

async function seedDatabase() {
  console.log('🌱 Iniciando seed de la base de datos...');

  try {
    // Limpiar tablas existentes
    await pool.query('TRUNCATE TABLE my_list CASCADE');
    await pool.query('TRUNCATE TABLE content CASCADE');
    console.log('✅ Tablas limpiadas');

    // Insertar contenido
    for (const content of sampleData) {
      await pool.query(
        `INSERT INTO content (title, description, type, genre, image_url, year, duration, episodes, seasons, rating, featured)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [
          content.title,
          content.description,
          content.type,
          content.genre,
          content.imageUrl,
          content.year,
          content.duration || null,
          content.episodes || null,
          content.seasons || null,
          content.rating,
          content.featured || false
        ]
      );
    }

    console.log(`✅ Se insertaron ${sampleData.length} contenidos`);
    console.log('🎉 Seed completado exitosamente');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error en el seed:', error);
    process.exit(1);
  }
}

seedDatabase();
