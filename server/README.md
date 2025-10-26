NeFlis - Server skeleton

Este directorio contiene un esqueleto básico para el backend en Node.js + TypeScript.

Estructura propuesta (Clean Architecture mínima):

- src/
  - controllers/    -> adaptadores HTTP
  - usecases/       -> lógica de aplicación
  - repositories/   -> interfaces hacia la BD
  - entities/       -> modelos del dominio
  - infra/          -> implementación concreta (Postgres, ORM)
  - routes.ts       -> definición de rutas
  - index.ts        -> arranque del servidor

Comandos útiles:

Install dependencies (desde este directorio):

  npm install

Run in dev:

  npm run dev

Nota: este README es una plantilla; puedo crear las carpetas y algunos archivos iniciales si quieres que continúe.
