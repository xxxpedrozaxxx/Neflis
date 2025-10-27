# 🎬 NETFLIS - Backend

Backend del sistema de streaming tipo Netflix con Clean Architecture.

## 📋 Requisitos Previos

- Node.js v18 o superior
- PostgreSQL v14 o superior
- npm o yarn

## 🚀 Instalación

1. **Instalar dependencias:**
```bash
cd backend
npm install
```

2. **Configurar variables de entorno:**
```bash
cp .env.example .env
# Editar .env con tus credenciales de PostgreSQL
```

3. **Crear la base de datos:**
```bash
# Conectarse a PostgreSQL
psql -U postgres

# Crear la base de datos
CREATE DATABASE netflis_db;
\q
```

4. **Ejecutar migraciones:**
```bash
# Ejecutar el script SQL de migración
psql -U postgres -d netflis_db -f src/infrastructure/database/migrations/001_create_tables.sql
```

5. **Poblar con datos de prueba:**
```bash
npm run db:seed
```

## 💻 Desarrollo

```bash
npm run dev
```

El servidor estará disponible en: `http://localhost:3000`

## 📁 Estructura del Proyecto (Clean Architecture)

```
backend/
├── src/
│   ├── domain/                    # Capa de Dominio
│   │   ├── entities/             # Entidades del negocio
│   │   │   ├── User.ts
│   │   │   ├── Content.ts
│   │   │   └── MyList.ts
│   │   └── repositories/         # Interfaces de repositorios
│   │       ├── IUserRepository.ts
│   │       ├── IContentRepository.ts
│   │       └── IMyListRepository.ts
│   │
│   ├── application/              # Capa de Aplicación
│   │   └── use-cases/           # Casos de uso
│   │       ├── auth/
│   │       │   ├── RegisterUserUseCase.ts
│   │       │   └── LoginUserUseCase.ts
│   │       ├── content/
│   │       │   ├── GetContentByTypeUseCase.ts
│   │       │   └── GetFeaturedContentUseCase.ts
│   │       └── mylist/
│   │           ├── AddToMyListUseCase.ts
│   │           └── GetMyListUseCase.ts
│   │
│   ├── infrastructure/           # Capa de Infraestructura
│   │   ├── database/
│   │   │   ├── connection.ts
│   │   │   └── migrations/
│   │   └── repositories/        # Implementaciones
│   │       ├── PostgresUserRepository.ts
│   │       ├── PostgresContentRepository.ts
│   │       └── PostgresMyListRepository.ts
│   │
│   ├── presentation/            # Capa de Presentación
│   │   ├── controllers/
│   │   │   ├── AuthController.ts
│   │   │   ├── ContentController.ts
│   │   │   └── MyListController.ts
│   │   ├── routes/
│   │   │   ├── authRoutes.ts
│   │   │   ├── contentRoutes.ts
│   │   │   └── myListRoutes.ts
│   │   └── middleware/
│   │       └── authMiddleware.ts
│   │
│   ├── scripts/
│   │   └── seed.ts
│   └── index.ts                 # Punto de entrada
│
├── package.json
├── tsconfig.json
└── .env.example
```

## 🔌 Endpoints API

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión

### Contenido
- `GET /api/content?type=movie|series` - Obtener contenido por tipo
- `GET /api/content/featured` - Obtener contenido destacado

### Mi Lista
- `GET /api/mylist` - Obtener mi lista
- `POST /api/mylist` - Agregar a mi lista
- `DELETE /api/mylist/:contentId` - Eliminar de mi lista

## 🎯 Principios de Clean Architecture Aplicados

1. **Independencia de frameworks**: La lógica de negocio no depende de Express
2. **Testeable**: Los casos de uso pueden probarse sin UI, DB o servidores
3. **Independencia de UI**: La lógica no conoce la interfaz
4. **Independencia de DB**: Se puede cambiar PostgreSQL por otra DB
5. **Independencia de agentes externos**: La lógica de negocio está aislada

## 📝 Notas para la Clase de Redes

Este proyecto es ideal para demostrar:
- Arquitectura cliente-servidor
- APIs RESTful
- Autenticación JWT
- Conexión a base de datos PostgreSQL
- Estructura modular y escalable
