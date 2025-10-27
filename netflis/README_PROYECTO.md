# 🎬 NETFLIS - Aplicación de Streaming Estilo Netflix

Proyecto de clase de Redes - Sistema de streaming completo con arquitectura cliente-servidor.

## 📁 Estructura del Proyecto

```
netflis/
├── backend/                          # Servidor Node.js + Express + PostgreSQL
│   ├── src/
│   │   ├── domain/                  # 🎯 Capa de Dominio
│   │   │   ├── entities/           # Entidades del negocio
│   │   │   └── repositories/       # Interfaces de repositorios
│   │   ├── application/            # 📋 Capa de Aplicación
│   │   │   └── use-cases/         # Casos de uso (lógica de negocio)
│   │   ├── infrastructure/         # 🔧 Capa de Infraestructura
│   │   │   ├── database/          # Conexión y migraciones DB
│   │   │   └── repositories/      # Implementaciones de repositorios
│   │   └── presentation/          # 🌐 Capa de Presentación
│   │       ├── controllers/       # Controladores HTTP
│   │       ├── routes/            # Definición de rutas API
│   │       └── middleware/        # Middleware (auth, etc.)
│   └── package.json
│
├── src/                             # Frontend React + TypeScript
│   ├── modules/                    # 📦 MÓDULOS (Clean Architecture)
│   │   ├── auth/                  # Módulo de Autenticación
│   │   │   ├── application/       # Hooks personalizados (casos de uso)
│   │   │   │   └── useAuth.ts
│   │   │   ├── infrastructure/    # Servicios HTTP
│   │   │   │   └── AuthService.ts
│   │   │   └── presentation/      # Componentes UI
│   │   │       ├── LoginView.tsx
│   │   │       └── SignUpView.tsx
│   │   │
│   │   ├── content/              # Módulo de Contenido (Películas/Series)
│   │   │   ├── application/
│   │   │   │   └── useContent.ts
│   │   │   ├── infrastructure/
│   │   │   │   └── ContentService.ts
│   │   │   └── presentation/
│   │   │       ├── MoviesView.tsx
│   │   │       └── SeriesView.tsx
│   │   │
│   │   ├── home/                 # Módulo de Inicio
│   │   │   └── presentation/
│   │   │       └── HomeView.tsx
│   │   │
│   │   ├── mylist/               # Módulo de Mi Lista
│   │   │   ├── application/
│   │   │   │   └── useMyList.ts
│   │   │   ├── infrastructure/
│   │   │   │   └── MyListService.ts
│   │   │   └── presentation/
│   │   │       └── MyListView.tsx
│   │   │
│   │   └── profile/              # Módulo de Perfil
│   │       └── presentation/
│   │           └── ProfileView.tsx
│   │
│   ├── shared/                    # 🔗 COMPARTIDO
│   │   ├── types/                # Tipos TypeScript
│   │   ├── config/               # Configuraciones
│   │   └── utils/                # Utilidades (httpClient)
│   │
│   ├── components/               # Componentes reutilizables
│   │   ├── ui/                  # Componentes UI (shadcn)
│   │   └── common/              # Componentes comunes
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       └── MovieRow.tsx
│   │
│   ├── App.tsx                  # Aplicación principal
│   └── main.tsx                # Punto de entrada
│
└── package.json
```

## 🏗️ Clean Architecture Aplicada

### **Capas del Backend:**
1. **Domain (Dominio)**: Entidades y reglas de negocio
2. **Application (Aplicación)**: Casos de uso y lógica de aplicación
3. **Infrastructure (Infraestructura)**: Implementaciones técnicas (DB, APIs)
4. **Presentation (Presentación)**: Controllers, routes, middleware

### **Capas del Frontend:**
1. **Application**: Hooks personalizados (casos de uso)
2. **Infrastructure**: Servicios HTTP (llamadas a API)
3. **Presentation**: Componentes de interfaz de usuario

## 🚀 Instalación y Ejecución

### **1. Backend**

```bash
cd backend
npm install

# Configurar .env
cp .env.example .env
# Editar .env con tus credenciales de PostgreSQL

# Crear base de datos
psql -U postgres
CREATE DATABASE netflis_db;
\q

# Ejecutar migraciones
psql -U postgres -d netflis_db -f src/infrastructure/database/migrations/001_create_tables.sql

# Poblar datos de prueba
npm run db:seed

# Iniciar servidor
npm run dev
```

El backend estará en: **http://localhost:3000**

### **2. Frontend**

```bash
npm install
npm run dev
```

El frontend estará en: **http://localhost:5173**

## 📡 API Endpoints

### **Autenticación**
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión

### **Contenido**
- `GET /api/content?type=movie` - Obtener películas
- `GET /api/content?type=series` - Obtener series
- `GET /api/content/featured` - Contenido destacado

### **Mi Lista**
- `GET /api/mylist` - Obtener mi lista
- `POST /api/mylist` - Agregar a mi lista
- `DELETE /api/mylist/:id` - Eliminar de mi lista

## 📦 Módulos de la Aplicación

### **1. Módulo Auth (Autenticación)**
- Login
- Registro (Sign Up)
- Gestión de sesión con JWT

### **2. Módulo Home (Inicio)**
- Hero con contenido destacado
- Filas de películas y series populares
- Navegación principal

### **3. Módulo Movies (Películas)**
- Catálogo completo de películas
- Filtrado por género
- Detalles de película

### **4. Módulo Series**
- Catálogo completo de series
- Filtrado por género
- Detalles de serie

### **5. Módulo MyList (Mi Lista)**
- Lista personalizada del usuario
- Agregar/Eliminar contenido
- Persistencia en base de datos

### **6. Módulo Profile (Perfil)**
- Información del usuario
- Configuración de cuenta
- Cerrar sesión

## 🎓 Conceptos de Redes Demostrados

1. **Arquitectura Cliente-Servidor**
   - Cliente: React (Frontend)
   - Servidor: Node.js + Express (Backend)

2. **Protocolo HTTP/HTTPS**
   - Métodos: GET, POST, DELETE
   - Códigos de estado: 200, 201, 400, 401, 500

3. **API RESTful**
   - Endpoints organizados por recursos
   - Operaciones CRUD

4. **Autenticación y Seguridad**
   - JWT (JSON Web Tokens)
   - Bcrypt para encriptar contraseñas
   - Middleware de autenticación

5. **Base de Datos**
   - PostgreSQL (relacional)
   - Migraciones y seeds
   - Relaciones entre tablas

6. **CORS (Cross-Origin Resource Sharing)**
   - Permitir peticiones del frontend al backend

## 🛠️ Tecnologías Utilizadas

### **Backend:**
- Node.js + TypeScript
- Express.js
- PostgreSQL
- JWT para autenticación
- Bcrypt para seguridad

### **Frontend:**
- React 18 + TypeScript
- Vite (build tool)
- TailwindCSS
- Shadcn/ui (componentes)
- Fetch API para HTTP

## 📝 Ventajas de Clean Architecture

✅ **Separación de responsabilidades**
✅ **Código testeable**
✅ **Fácil mantenimiento**
✅ **Escalable**
✅ **Independiente de frameworks**
✅ **Modular y organizado**

## 👥 Autor

Proyecto educativo para clase de Redes

## 📄 Licencia

MIT
