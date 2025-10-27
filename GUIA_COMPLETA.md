# 📚 GUÍA COMPLETA - PROYECTO NETFLIS PARA CLASE DE REDES

## 🎯 RESUMEN DEL PROYECTO

Has creado una **aplicación de streaming tipo Netflix** con:
- ✅ **Backend**: Node.js + Express + TypeScript + PostgreSQL
- ✅ **Frontend**: React + TypeScript + Vite
- ✅ **Arquitectura**: Clean Architecture (separación en capas)
- ✅ **Módulos**: Auth, Home, Movies, Series, MyList, Profile

---

## 📂 ESTRUCTURA DEL PROYECTO (REORGANIZADA)

```
netflis/
│
├── backend/                              # 🔙 SERVIDOR (Node.js + Express + PostgreSQL)
│   ├── src/
│   │   ├── domain/                      # Entidades y reglas de negocio
│   │   │   ├── entities/
│   │   │   │   ├── User.ts
│   │   │   │   ├── Content.ts
│   │   │   │   └── MyList.ts
│   │   │   └── repositories/
│   │   │       ├── IUserRepository.ts
│   │   │       ├── IContentRepository.ts
│   │   │       └── IMyListRepository.ts
│   │   │
│   │   ├── application/                 # Casos de uso (lógica de aplicación)
│   │   │   └── use-cases/
│   │   │       ├── auth/
│   │   │       │   ├── RegisterUserUseCase.ts
│   │   │       │   └── LoginUserUseCase.ts
│   │   │       ├── content/
│   │   │       │   ├── GetContentByTypeUseCase.ts
│   │   │       │   └── GetFeaturedContentUseCase.ts
│   │   │       └── mylist/
│   │   │           ├── AddToMyListUseCase.ts
│   │   │           └── GetMyListUseCase.ts
│   │   │
│   │   ├── infrastructure/              # Implementaciones técnicas
│   │   │   ├── database/
│   │   │   │   ├── connection.ts
│   │   │   │   └── migrations/
│   │   │   │       └── 001_create_tables.sql
│   │   │   └── repositories/
│   │   │       ├── PostgresUserRepository.ts
│   │   │       ├── PostgresContentRepository.ts
│   │   │       └── PostgresMyListRepository.ts
│   │   │
│   │   ├── presentation/                # Controllers, routes, middleware
│   │   │   ├── controllers/
│   │   │   │   ├── AuthController.ts
│   │   │   │   ├── ContentController.ts
│   │   │   │   └── MyListController.ts
│   │   │   ├── routes/
│   │   │   │   ├── authRoutes.ts
│   │   │   │   ├── contentRoutes.ts
│   │   │   │   └── myListRoutes.ts
│   │   │   └── middleware/
│   │   │       └── authMiddleware.ts
│   │   │
│   │   ├── scripts/
│   │   │   └── seed.ts                  # Script para datos de prueba
│   │   │
│   │   └── index.ts                     # Servidor principal
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── README.md
│
├── src/                                  # 🎨 FRONTEND (React + TypeScript)
│   ├── modules/                         # MÓDULOS con Clean Architecture
│   │   │
│   │   ├── auth/                        # Módulo de Autenticación
│   │   │   ├── application/
│   │   │   │   └── useAuth.ts          # Hook personalizado
│   │   │   ├── infrastructure/
│   │   │   │   └── AuthService.ts      # Servicio HTTP
│   │   │   └── presentation/
│   │   │       ├── LoginView.tsx       # Vista de Login
│   │   │       └── SignUpView.tsx      # Vista de Registro
│   │   │
│   │   ├── content/                     # Módulo de Contenido
│   │   │   ├── application/
│   │   │   │   └── useContent.ts
│   │   │   ├── infrastructure/
│   │   │   │   └── ContentService.ts
│   │   │   └── presentation/
│   │   │       ├── MoviesView.tsx
│   │   │       └── SeriesView.tsx
│   │   │
│   │   ├── home/                        # Módulo de Inicio
│   │   │   └── presentation/
│   │   │       └── HomeView.tsx
│   │   │
│   │   ├── mylist/                      # Módulo de Mi Lista
│   │   │   ├── application/
│   │   │   │   └── useMyList.ts
│   │   │   ├── infrastructure/
│   │   │   │   └── MyListService.ts
│   │   │   └── presentation/
│   │   │       └── MyListView.tsx
│   │   │
│   │   └── profile/                     # Módulo de Perfil
│   │       └── presentation/
│   │           └── ProfileView.tsx
│   │
│   ├── shared/                          # Código compartido
│   │   ├── types/
│   │   │   └── index.ts                # Tipos TypeScript
│   │   ├── config/
│   │   │   └── api.ts                  # Configuración API
│   │   └── utils/
│   │       └── httpClient.ts           # Cliente HTTP
│   │
│   ├── components/                      # Componentes existentes
│   │   ├── ui/                         # Componentes UI (shadcn)
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MovieRow.tsx
│   │   └── ... (otros componentes)
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── vite.config.ts
└── README_PROYECTO.md                   # Este archivo
```

---

## 🚀 PASOS PARA EJECUTAR EL PROYECTO

### **PASO 1: Instalar PostgreSQL**

1. Descarga PostgreSQL desde: https://www.postgresql.org/download/
2. Instala PostgreSQL
3. Durante la instalación, establece una contraseña para el usuario `postgres`
4. Anota la contraseña (la necesitarás después)

### **PASO 2: Configurar el Backend**

```powershell
# Navegar a la carpeta backend
cd backend

# Instalar dependencias
npm install

# Copiar archivo de ejemplo de variables de entorno
Copy-Item .env.example .env

# Editar el archivo .env con tus credenciales de PostgreSQL
# Abre el archivo .env y cambia:
# DB_PASSWORD=tu_contraseña_de_postgres
notepad .env
```

### **PASO 3: Crear la Base de Datos**

```powershell
# Abrir PostgreSQL desde PowerShell
psql -U postgres

# Dentro de psql, ejecutar:
CREATE DATABASE netflis_db;

# Salir de psql
\q
```

### **PASO 4: Ejecutar Migraciones (Crear Tablas)**

```powershell
# Ejecutar el script SQL para crear las tablas
psql -U postgres -d netflis_db -f src/infrastructure/database/migrations/001_create_tables.sql
```

### **PASO 5: Poblar Datos de Prueba**

```powershell
# Ejecutar el script de seed
npm run db:seed
```

Deberías ver:
```
✅ Tablas limpiadas
✅ Se insertaron 10 contenidos
🎉 Seed completado exitosamente
```

### **PASO 6: Iniciar el Servidor Backend**

```powershell
npm run dev
```

Deberías ver:
```
✅ Conectado a PostgreSQL
🚀 Servidor ejecutándose en http://localhost:3000
📚 API Base URL: http://localhost:3000/api
```

### **PASO 7: Configurar el Frontend**

Abre una **NUEVA terminal** (deja el backend corriendo):

```powershell
# Volver a la carpeta raíz del proyecto
cd ..

# Copiar archivo de ejemplo de variables de entorno
Copy-Item .env.example .env

# El frontend ya debería tener las dependencias instaladas
# Si no, ejecuta:
npm install
```

### **PASO 8: Iniciar el Frontend**

```powershell
npm run dev
```

Deberías ver:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### **PASO 9: Probar la Aplicación**

1. Abre tu navegador en: **http://localhost:5173**
2. Deberías ver la pantalla de Login
3. Haz clic en "Suscríbete ahora" para crear una cuenta
4. Registra un nuevo usuario
5. Inicia sesión con tus credenciales

---

## 🧪 PROBAR LA API CON POSTMAN (OPCIONAL)

### **1. Registrar Usuario**
```
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "123456",
  "name": "Usuario Test"
}
```

### **2. Iniciar Sesión**
```
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "123456"
}
```

Respuesta:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "email": "test@example.com",
    "name": "Usuario Test"
  }
}
```

### **3. Obtener Películas (requiere autenticación)**
```
GET http://localhost:3000/api/content?type=movie
Authorization: Bearer TU_TOKEN_AQUI
```

### **4. Obtener Series**
```
GET http://localhost:3000/api/content?type=series
Authorization: Bearer TU_TOKEN_AQUI
```

### **5. Agregar a Mi Lista**
```
POST http://localhost:3000/api/mylist
Authorization: Bearer TU_TOKEN_AQUI
Content-Type: application/json

{
  "contentId": "ID_DEL_CONTENIDO"
}
```

---

## 🏗️ EXPLICACIÓN DE CLEAN ARCHITECTURE

### **¿Qué es Clean Architecture?**

Es una forma de organizar el código en capas separadas, donde cada capa tiene una responsabilidad específica:

```
┌─────────────────────────────────────┐
│        PRESENTATION LAYER           │  ← Controllers, Routes, UI
│  (Controllers, Routes, Components)  │
├─────────────────────────────────────┤
│       APPLICATION LAYER             │  ← Use Cases, Business Logic
│      (Use Cases, Hooks)             │
├─────────────────────────────────────┤
│      INFRASTRUCTURE LAYER           │  ← Implementations, Services
│   (Repositories, Services, HTTP)    │
├─────────────────────────────────────┤
│         DOMAIN LAYER                │  ← Entities, Interfaces
│    (Entities, Repositories)         │
└─────────────────────────────────────┘
```

### **Ventajas:**

1. ✅ **Separación de responsabilidades**: Cada capa hace solo una cosa
2. ✅ **Testeable**: Puedes probar cada capa independientemente
3. ✅ **Mantenible**: Fácil de modificar y extender
4. ✅ **Escalable**: Puedes agregar nuevos módulos sin afectar los existentes
5. ✅ **Independiente**: Puedes cambiar la base de datos o el framework sin cambiar la lógica de negocio

---

## 📋 MÓDULOS IMPLEMENTADOS

### **1. Módulo AUTH (Autenticación)**
- ✅ Login
- ✅ Registro
- ✅ JWT para sesiones
- ✅ Middleware de autenticación

### **2. Módulo HOME (Inicio)**
- ✅ Hero con contenido destacado
- ✅ Filas de contenido popular
- ✅ Navegación

### **3. Módulo MOVIES (Películas)**
- ✅ Catálogo de películas
- ✅ Filtrado por género
- ✅ Detalles de película

### **4. Módulo SERIES**
- ✅ Catálogo de series
- ✅ Filtrado por género
- ✅ Detalles de serie

### **5. Módulo MYLIST (Mi Lista)**
- ✅ Lista personalizada
- ✅ Agregar contenido
- ✅ Eliminar contenido

### **6. Módulo PROFILE (Perfil)**
- ⏳ Por implementar (estructura lista)

---

## 🎓 CONCEPTOS DE REDES DEMOSTRADOS

1. **Arquitectura Cliente-Servidor**
   - Cliente (React) se comunica con Servidor (Node.js)

2. **Protocolo HTTP**
   - GET, POST, DELETE
   - Headers, Body, Status Codes

3. **API RESTful**
   - Endpoints organizados por recursos
   - Operaciones CRUD

4. **Autenticación**
   - JWT (JSON Web Tokens)
   - Header Authorization: Bearer token

5. **Base de Datos Relacional**
   - PostgreSQL
   - Tablas, relaciones, índices

6. **CORS**
   - Permitir peticiones cross-origin

---

## ❓ SOLUCIÓN DE PROBLEMAS COMUNES

### **Error: No se puede conectar a PostgreSQL**
```
❌ Error en la conexión a PostgreSQL
```
**Solución**: Verifica que PostgreSQL esté corriendo y que las credenciales en `.env` sean correctas.

### **Error: Puerto 3000 ya está en uso**
```
Error: listen EADDRINUSE: address already in use :::3000
```
**Solución**: Cambia el puerto en `.env` o detén el proceso que está usando el puerto 3000.

### **Error: Tabla no existe**
```
ERROR:  relation "users" does not exist
```
**Solución**: Ejecuta las migraciones nuevamente (PASO 4).

### **Error: CORS**
```
Access to fetch at 'http://localhost:3000' from origin 'http://localhost:5173' has been blocked by CORS
```
**Solución**: El backend ya tiene CORS configurado. Asegúrate de que el backend esté corriendo.

---

## 📝 PRÓXIMOS PASOS (PARA EXTENDER EL PROYECTO)

1. ✨ Completar el módulo de Perfil
2. ✨ Implementar reproductor de video
3. ✨ Agregar búsqueda de contenido
4. ✨ Implementar calificaciones
5. ✨ Agregar comentarios
6. ✨ Sistema de recomendaciones

---

## 🎉 ¡LISTO PARA TU PRESENTACIÓN!

Tu proyecto ahora tiene:
- ✅ Backend completo con Clean Architecture
- ✅ Frontend modularizado
- ✅ Base de datos PostgreSQL
- ✅ API RESTful funcional
- ✅ Autenticación con JWT
- ✅ Módulos bien organizados
- ✅ Código mantenible y escalable

¡Perfecto para tu clase de Redes! 🚀
