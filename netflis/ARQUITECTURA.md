# 🏗️ ARQUITECTURA DEL PROYECTO NETFLIS

## 📊 DIAGRAMA DE ARQUITECTURA COMPLETA

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENTE (FRONTEND)                         │
│                     React + TypeScript + Vite                       │
│                       http://localhost:5173                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │
│  │    AUTH     │  │   CONTENT   │  │   MYLIST    │               │
│  │   Module    │  │   Module    │  │   Module    │               │
│  └─────────────┘  └─────────────┘  └─────────────┘               │
│         │                │                 │                       │
│         ▼                ▼                 ▼                       │
│  ┌──────────────────────────────────────────────────┐             │
│  │          Shared Layer (Types, Utils)             │             │
│  │  • HttpClient  • Types  • Config                 │             │
│  └──────────────────────────────────────────────────┘             │
│                           │                                        │
└───────────────────────────┼────────────────────────────────────────┘
                            │
                            │ HTTP Requests
                            │ (Fetch API)
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        SERVIDOR (BACKEND)                           │
│                 Node.js + Express + TypeScript                      │
│                       http://localhost:3000                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────────────────────────────────────────────────┐     │
│  │           PRESENTATION LAYER (HTTP Interface)            │     │
│  │  • Controllers  • Routes  • Middleware                   │     │
│  └──────────────────────────────────────────────────────────┘     │
│                           │                                        │
│  ┌──────────────────────────────────────────────────────────┐     │
│  │         APPLICATION LAYER (Business Logic)               │     │
│  │  • Use Cases  • Business Rules                           │     │
│  └──────────────────────────────────────────────────────────┘     │
│                           │                                        │
│  ┌──────────────────────────────────────────────────────────┐     │
│  │      INFRASTRUCTURE LAYER (Implementation)               │     │
│  │  • Repositories  • Database Connection                   │     │
│  └──────────────────────────────────────────────────────────┘     │
│                           │                                        │
│  ┌──────────────────────────────────────────────────────────┐     │
│  │            DOMAIN LAYER (Core Business)                  │     │
│  │  • Entities  • Interfaces                                │     │
│  └──────────────────────────────────────────────────────────┘     │
│                           │                                        │
└───────────────────────────┼────────────────────────────────────────┘
                            │
                            │ SQL Queries
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      BASE DE DATOS (PostgreSQL)                     │
│                          Puerto 5432                                │
├─────────────────────────────────────────────────────────────────────┤
│  Tables:                                                            │
│  • users        → Usuarios registrados                              │
│  • content      → Películas y Series                                │
│  • my_list      → Lista personalizada por usuario                   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔄 FLUJO DE UNA PETICIÓN (Ejemplo: Login)

```
1. Usuario ingresa email/password en LoginView
   │
   ├──► useAuth Hook (Application Layer Frontend)
   │    └──► authService.login() (Infrastructure Frontend)
   │         └──► httpClient.post('/api/auth/login')
   │
   │    HTTP Request
   │    POST http://localhost:3000/api/auth/login
   │    Body: { email, password }
   │
2. Backend recibe la petición
   │
   ├──► Express Router → authRoutes
   │    └──► AuthController.login()
   │         └──► LoginUserUseCase.execute()
   │              ├──► UserRepository.findByEmail()
   │              │    └──► PostgreSQL Query
   │              │         SELECT * FROM users WHERE email = ?
   │              │
   │              ├──► bcrypt.compare() (verificar password)
   │              │
   │              └──► jwt.sign() (crear token)
   │
3. Respuesta al cliente
   │
   └──► { token: "eyJhbG...", user: {...} }
        │
        └──► Frontend guarda token en localStorage
             └──► Redirige a Home
```

---

## 📦 ESTRUCTURA DE MÓDULOS (FRONTEND)

```
modules/
│
├── auth/
│   ├── application/
│   │   └── useAuth.ts              ← Hook personalizado (Casos de uso)
│   ├── infrastructure/
│   │   └── AuthService.ts          ← Servicio HTTP (Implementación)
│   └── presentation/
│       ├── LoginView.tsx           ← UI del Login
│       └── SignUpView.tsx          ← UI del Registro
│
├── content/
│   ├── application/
│   │   └── useContent.ts           ← Hook para obtener contenido
│   ├── infrastructure/
│   │   └── ContentService.ts       ← Servicio HTTP para contenido
│   └── presentation/
│       ├── MoviesView.tsx          ← UI de Películas
│       └── SeriesView.tsx          ← UI de Series
│
└── mylist/
    ├── application/
    │   └── useMyList.ts            ← Hook para Mi Lista
    ├── infrastructure/
    │   └── MyListService.ts        ← Servicio HTTP para Mi Lista
    └── presentation/
        └── MyListView.tsx          ← UI de Mi Lista
```

---

## 🗂️ ESTRUCTURA DE CAPAS (BACKEND)

```
src/
│
├── domain/                          ← CAPA DE DOMINIO
│   ├── entities/                    (Entidades del negocio)
│   │   ├── User.ts
│   │   ├── Content.ts
│   │   └── MyList.ts
│   └── repositories/                (Interfaces de repositorios)
│       ├── IUserRepository.ts
│       ├── IContentRepository.ts
│       └── IMyListRepository.ts
│
├── application/                     ← CAPA DE APLICACIÓN
│   └── use-cases/                   (Casos de uso)
│       ├── auth/
│       │   ├── RegisterUserUseCase.ts
│       │   └── LoginUserUseCase.ts
│       ├── content/
│       │   ├── GetContentByTypeUseCase.ts
│       │   └── GetFeaturedContentUseCase.ts
│       └── mylist/
│           ├── AddToMyListUseCase.ts
│           └── GetMyListUseCase.ts
│
├── infrastructure/                  ← CAPA DE INFRAESTRUCTURA
│   ├── database/
│   │   ├── connection.ts
│   │   └── migrations/
│   └── repositories/                (Implementaciones)
│       ├── PostgresUserRepository.ts
│       ├── PostgresContentRepository.ts
│       └── PostgresMyListRepository.ts
│
└── presentation/                    ← CAPA DE PRESENTACIÓN
    ├── controllers/
    │   ├── AuthController.ts
    │   ├── ContentController.ts
    │   └── MyListController.ts
    ├── routes/
    │   ├── authRoutes.ts
    │   ├── contentRoutes.ts
    │   └── myListRoutes.ts
    └── middleware/
        └── authMiddleware.ts
```

---

## 🔐 AUTENTICACIÓN CON JWT

```
┌─────────────┐                                  ┌─────────────┐
│   Cliente   │                                  │  Servidor   │
└──────┬──────┘                                  └──────┬──────┘
       │                                                │
       │  POST /api/auth/login                         │
       │  { email, password }                          │
       ├──────────────────────────────────────────────►│
       │                                                │
       │                                         ┌──────▼──────┐
       │                                         │  Verificar  │
       │                                         │  password   │
       │                                         └──────┬──────┘
       │                                                │
       │                                         ┌──────▼──────┐
       │                                         │   Generar   │
       │                                         │   JWT Token │
       │                                         └──────┬──────┘
       │                                                │
       │  { token: "eyJhbG...", user: {...} }          │
       │◄──────────────────────────────────────────────┤
       │                                                │
┌──────▼──────┐                                        │
│   Guardar   │                                        │
│   Token en  │                                        │
│ localStorage│                                        │
└──────┬──────┘                                        │
       │                                                │
       │  GET /api/content                             │
       │  Authorization: Bearer eyJhbG...              │
       ├──────────────────────────────────────────────►│
       │                                                │
       │                                         ┌──────▼──────┐
       │                                         │  Verificar  │
       │                                         │   Token     │
       │                                         └──────┬──────┘
       │                                                │
       │  [ { id: 1, title: "..." }, ... ]             │
       │◄──────────────────────────────────────────────┤
       │                                                │
```

---

## 🗃️ MODELO DE DATOS (PostgreSQL)

```sql
┌──────────────────────┐
│       users          │
├──────────────────────┤
│ id (UUID) PK         │
│ email (VARCHAR)      │
│ password (VARCHAR)   │
│ name (VARCHAR)       │
│ profile_image (TEXT) │
│ created_at           │
│ updated_at           │
└──────────────────────┘
           │
           │ 1
           │
           │ N
           ▼
┌──────────────────────┐         ┌──────────────────────┐
│      my_list         │    N    │      content         │
├──────────────────────┤────────►├──────────────────────┤
│ id (UUID) PK         │    1    │ id (UUID) PK         │
│ user_id (FK)         │         │ title (VARCHAR)      │
│ content_id (FK)      │         │ description (TEXT)   │
│ added_at             │         │ type (ENUM)          │
└──────────────────────┘         │ genre (ARRAY)        │
                                 │ image_url (TEXT)     │
                                 │ year (INT)           │
                                 │ duration (VARCHAR)   │
                                 │ episodes (INT)       │
                                 │ seasons (INT)        │
                                 │ rating (DECIMAL)     │
                                 │ featured (BOOLEAN)   │
                                 │ created_at           │
                                 │ updated_at           │
                                 └──────────────────────┘
```

**Relaciones:**
- Un **usuario** puede tener muchos items en **my_list** (1:N)
- Un **contenido** puede estar en muchas **my_list** de diferentes usuarios (1:N)

---

## 🎯 ENDPOINTS API

### **Autenticación**
```
POST   /api/auth/register    → Registrar usuario
POST   /api/auth/login       → Iniciar sesión
```

### **Contenido**
```
GET    /api/content?type=movie    → Obtener películas
GET    /api/content?type=series   → Obtener series
GET    /api/content/featured      → Obtener destacado
```

### **Mi Lista**
```
GET    /api/mylist              → Obtener mi lista
POST   /api/mylist              → Agregar a mi lista
DELETE /api/mylist/:contentId  → Eliminar de mi lista
```

---

## 🛠️ STACK TECNOLÓGICO

### **Backend:**
- ⚙️ Node.js + TypeScript
- 🚀 Express.js (Framework web)
- 🐘 PostgreSQL (Base de datos)
- 🔐 JWT (Autenticación)
- 🔒 Bcrypt (Encriptación)

### **Frontend:**
- ⚛️ React 18 + TypeScript
- ⚡ Vite (Build tool)
- 🎨 TailwindCSS (Estilos)
- 🧩 Shadcn/ui (Componentes)
- 🌐 Fetch API (HTTP)

---

## ✨ VENTAJAS DE ESTA ARQUITECTURA

1. **Modularidad**: Cada módulo es independiente
2. **Testabilidad**: Fácil de probar cada capa
3. **Mantenibilidad**: Fácil de modificar y extender
4. **Escalabilidad**: Agregar nuevos módulos sin afectar existentes
5. **Separación de responsabilidades**: Cada capa tiene un propósito claro
6. **Independencia**: Puedes cambiar DB o framework sin afectar la lógica
7. **Claridad**: Estructura clara y fácil de entender

---

¡Tu proyecto está **perfectamente organizado** para tu clase de Redes! 🚀
