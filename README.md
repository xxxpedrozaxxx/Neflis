# 🎬 NETFLIS - Sistema de Streaming Estilo Netflix

**Proyecto de clase de Redes** - Aplicación completa cliente-servidor con Clean Architecture

> 📑 **¿Primera vez aquí?** Comienza por el **[ÍNDICE.md](INDICE.md)** para navegar toda la documentación
> 
> 📘 **Instalación:** Lee la **[GUIA_COMPLETA.md](GUIA_COMPLETA.md)** paso a paso
> 
> 📊 **Resumen:** Ve **[RESUMEN.md](RESUMEN.md)** para un overview completo

## 📖 Descripción

Sistema de streaming de video estilo Netflix desarrollado con:
- ✅ **Backend**: Node.js + Express + TypeScript + PostgreSQL
- ✅ **Frontend**: React + TypeScript + Vite + TailwindCSS
- ✅ **Arquitectura**: Clean Architecture (Separación en capas)
- ✅ **Autenticación**: JWT (JSON Web Tokens)
- ✅ **Base de datos**: PostgreSQL con migraciones y seeds

## 🚀 Inicio Rápido

### **Backend (Terminal 1)**
```bash
cd backend
npm install
npm run dev
```

### **Frontend (Terminal 2)**
```bash
npm install
npm run dev
```

Abre tu navegador en: **http://localhost:5173**

## 📚 Documentación Completa

- 📘 **[GUIA_COMPLETA.md](GUIA_COMPLETA.md)** - Instalación paso a paso detallada
- 🏗️ **[ARQUITECTURA.md](ARQUITECTURA.md)** - Diagramas y explicación de la arquitectura
- ⚡ **[COMANDOS_RAPIDOS.md](COMANDOS_RAPIDOS.md)** - Comandos útiles para desarrollo
- 📁 **[backend/README.md](backend/README.md)** - Documentación específica del backend

## 📁 Estructura del Proyecto

```
netflis/
├── backend/              # Servidor Node.js + Express + PostgreSQL
│   ├── src/
│   │   ├── domain/      # Entidades y reglas de negocio
│   │   ├── application/ # Casos de uso
│   │   ├── infrastructure/ # Repositorios y DB
│   │   └── presentation/   # Controllers y routes
│   └── package.json
│
├── src/                  # Frontend React + TypeScript
│   ├── modules/         # Módulos con Clean Architecture
│   │   ├── auth/       # Autenticación
│   │   ├── content/    # Películas y Series
│   │   ├── mylist/     # Mi Lista
│   │   └── profile/    # Perfil
│   ├── shared/         # Tipos y utilidades
│   └── components/     # Componentes UI
│
└── package.json
```

## 🎯 Módulos Implementados

### **✅ AUTH (Autenticación)**
- Login con email/password
- Registro de nuevos usuarios
- JWT para sesiones
- Middleware de autenticación

### **✅ CONTENT (Contenido)**
- Catálogo de películas
- Catálogo de series
- Contenido destacado (Hero)
- Filtrado por género

### **✅ MYLIST (Mi Lista)**
- Lista personalizada por usuario
- Agregar/Eliminar contenido
- Persistencia en base de datos

### **🚧 PROFILE (Perfil)**
- En desarrollo

## 🔌 Endpoints API

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión

### Contenido
- `GET /api/content?type=movie|series` - Obtener contenido
- `GET /api/content/featured` - Contenido destacado

### Mi Lista
- `GET /api/mylist` - Obtener mi lista
- `POST /api/mylist` - Agregar a mi lista
- `DELETE /api/mylist/:id` - Eliminar de mi lista

## 🛠️ Stack Tecnológico

### Backend
- Node.js + TypeScript
- Express.js
- PostgreSQL
- JWT + Bcrypt

### Frontend
- React 18 + TypeScript
- Vite
- TailwindCSS
- Shadcn/ui

## 📦 Requisitos

- Node.js v18+
- PostgreSQL v14+
- npm o yarn

## 🎓 Conceptos de Redes Demostrados

1. **Arquitectura Cliente-Servidor**
2. **Protocolo HTTP/HTTPS**
3. **API RESTful**
4. **Autenticación JWT**
5. **Base de Datos Relacional**
6. **CORS**

## 🏗️ Clean Architecture

El proyecto implementa Clean Architecture con 4 capas:

1. **Domain** - Entidades y reglas de negocio
2. **Application** - Casos de uso
3. **Infrastructure** - Implementaciones técnicas
4. **Presentation** - Interfaz (Controllers/UI)

## 📝 Licencia

MIT - Proyecto educativo

---

**¿Primera vez con el proyecto?** Lee la [GUIA_COMPLETA.md](GUIA_COMPLETA.md) para instrucciones detalladas.
