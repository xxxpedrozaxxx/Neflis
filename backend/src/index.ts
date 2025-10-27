// ===========================
// SERVIDOR PRINCIPAL
// ===========================

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './infrastructure/database/connection';

// Repositorios
import { PostgresUserRepository } from './infrastructure/repositories/PostgresUserRepository';
import { PostgresContentRepository } from './infrastructure/repositories/PostgresContentRepository';
import { PostgresMyListRepository } from './infrastructure/repositories/PostgresMyListRepository';

// Casos de uso
import { RegisterUserUseCase } from './application/use-cases/auth/RegisterUserUseCase';
import { LoginUserUseCase } from './application/use-cases/auth/LoginUserUseCase';
import { GetContentByTypeUseCase } from './application/use-cases/content/GetContentByTypeUseCase';
import { GetFeaturedContentUseCase } from './application/use-cases/content/GetFeaturedContentUseCase';
import { AddToMyListUseCase } from './application/use-cases/mylist/AddToMyListUseCase';
import { GetMyListUseCase } from './application/use-cases/mylist/GetMyListUseCase';

// Controladores
import { AuthController } from './presentation/controllers/AuthController';
import { ContentController } from './presentation/controllers/ContentController';
import { MyListController } from './presentation/controllers/MyListController';

// Rutas
import { createAuthRoutes } from './presentation/routes/authRoutes';
import { createContentRoutes } from './presentation/routes/contentRoutes';
import { createMyListRoutes } from './presentation/routes/myListRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inicializar repositorios
const userRepository = new PostgresUserRepository(pool);
const contentRepository = new PostgresContentRepository(pool);
const myListRepository = new PostgresMyListRepository(pool);

// Inicializar casos de uso
const registerUserUseCase = new RegisterUserUseCase(userRepository);
const loginUserUseCase = new LoginUserUseCase(userRepository);
const getContentByTypeUseCase = new GetContentByTypeUseCase(contentRepository);
const getFeaturedContentUseCase = new GetFeaturedContentUseCase(contentRepository);
const addToMyListUseCase = new AddToMyListUseCase(myListRepository);
const getMyListUseCase = new GetMyListUseCase(myListRepository, contentRepository);

// Inicializar controladores
const authController = new AuthController(registerUserUseCase, loginUserUseCase);
const contentController = new ContentController(getContentByTypeUseCase, getFeaturedContentUseCase);
const myListController = new MyListController(addToMyListUseCase, getMyListUseCase, myListRepository);

// Configurar rutas
app.use('/api/auth', createAuthRoutes(authController));
app.use('/api/content', createContentRoutes(contentController));
app.use('/api/mylist', createMyListRoutes(myListController));

// Ruta de health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor Netflis funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📚 API Base URL: http://localhost:${PORT}/api`);
});

export default app;
