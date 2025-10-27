# ⚡ COMANDOS RÁPIDOS - NETFLIS

## 🚀 INICIO RÁPIDO

### **Backend (Terminal 1)**
```powershell
cd backend
npm install
npm run dev
```

### **Frontend (Terminal 2)**
```powershell
npm install
npm run dev
```

---

## 📦 INSTALACIÓN COMPLETA

### **1. Backend**
```powershell
cd backend
npm install
Copy-Item .env.example .env
# Editar .env con tus credenciales
notepad .env
```

### **2. Base de Datos**
```powershell
# Crear base de datos
psql -U postgres
CREATE DATABASE netflis_db;
\q

# Ejecutar migraciones
psql -U postgres -d netflis_db -f src/infrastructure/database/migrations/001_create_tables.sql

# Poblar datos de prueba
npm run db:seed
```

### **3. Frontend**
```powershell
cd ..
npm install
Copy-Item .env.example .env
```

---

## 🎯 COMANDOS DE DESARROLLO

### **Backend**
```powershell
cd backend

# Desarrollo (auto-reload)
npm run dev

# Build para producción
npm run build

# Ejecutar producción
npm start

# Poblar datos de prueba
npm run db:seed
```

### **Frontend**
```powershell
# Desarrollo
npm run dev

# Build
npm run build

# Preview del build
npm run preview
```

---

## 🗃️ COMANDOS DE BASE DE DATOS

### **PostgreSQL**
```powershell
# Conectar a PostgreSQL
psql -U postgres

# Conectar a la base de datos netflis
psql -U postgres -d netflis_db

# Listar bases de datos
\l

# Listar tablas
\dt

# Ver estructura de tabla
\d users
\d content
\d my_list

# Ver datos de tabla
SELECT * FROM users;
SELECT * FROM content;
SELECT * FROM my_list;

# Salir
\q
```

### **Reiniciar Base de Datos**
```powershell
# Conectar
psql -U postgres -d netflis_db

# Limpiar tablas
TRUNCATE TABLE my_list CASCADE;
TRUNCATE TABLE content CASCADE;
TRUNCATE TABLE users CASCADE;

# Salir y volver a poblar
\q
cd backend
npm run db:seed
```

---

## 🧪 TESTING CON CURL

### **Registro**
```powershell
curl -X POST http://localhost:3000/api/auth/register `
  -H "Content-Type: application/json" `
  -d '{\"email\":\"test@test.com\",\"password\":\"123456\",\"name\":\"Test User\"}'
```

### **Login**
```powershell
curl -X POST http://localhost:3000/api/auth/login `
  -H "Content-Type: application/json" `
  -d '{\"email\":\"test@test.com\",\"password\":\"123456\"}'
```

### **Obtener Películas**
```powershell
curl -X GET "http://localhost:3000/api/content?type=movie" `
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

---

## 🔍 VERIFICAR QUE TODO FUNCIONA

### **1. Verificar Backend**
```powershell
# Health check
curl http://localhost:3000/api/health
```

Respuesta esperada:
```json
{"status":"OK","message":"Servidor Netflis funcionando correctamente"}
```

### **2. Verificar Frontend**
Abre el navegador en: http://localhost:5173

### **3. Verificar Base de Datos**
```powershell
psql -U postgres -d netflis_db -c "SELECT COUNT(*) FROM content;"
```

Debe mostrar: `count: 10`

---

## 🛑 DETENER SERVIDORES

### **Detener Backend/Frontend**
En cada terminal donde esté corriendo, presiona:
```
Ctrl + C
```

### **Detener PostgreSQL (si es necesario)**
```powershell
# En Windows
Stop-Service postgresql-x64-14  # o la versión que tengas
```

---

## 🔧 SOLUCIÓN RÁPIDA DE PROBLEMAS

### **Error: Puerto ocupado**
```powershell
# Ver qué está usando el puerto 3000
netstat -ano | findstr :3000

# Matar el proceso (reemplaza PID con el número que aparece)
taskkill /PID 1234 /F
```

### **Error: PostgreSQL no conecta**
```powershell
# Verificar que PostgreSQL está corriendo
Get-Service postgresql*

# Si no está corriendo, iniciarlo
Start-Service postgresql-x64-14  # o tu versión
```

### **Error: Módulo no encontrado**
```powershell
# Backend
cd backend
Remove-Item -Recurse -Force node_modules
npm install

# Frontend
cd ..
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 📂 ABRIR EN VS CODE

```powershell
# Desde la raíz del proyecto
code .

# Backend
cd backend
code .

# Frontend (raíz)
code .
```

---

## 🎨 FORMATEAR CÓDIGO (OPCIONAL)

### **Instalar Prettier**
```powershell
npm install -D prettier
```

### **Formatear todo**
```powershell
npx prettier --write "src/**/*.{ts,tsx,js,jsx,json,css}"
```

---

## 📝 NOTAS ÚTILES

### **URLs Importantes:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Health Check: http://localhost:3000/api/health
- PostgreSQL: localhost:5432

### **Credenciales por defecto:**
- DB User: postgres
- DB Password: (la que configuraste al instalar)
- DB Name: netflis_db

### **Archivos de configuración:**
- Backend: `backend/.env`
- Frontend: `.env`
- DB: `backend/src/infrastructure/database/migrations/001_create_tables.sql`

---

## 🎯 FLUJO DE TRABAJO DIARIO

```powershell
# 1. Abrir terminal 1 - Backend
cd backend
npm run dev

# 2. Abrir terminal 2 - Frontend
cd ..
npm run dev

# 3. Abrir navegador
start http://localhost:5173

# 4. ¡Empezar a desarrollar! 🚀
```

---

## 💾 BACKUP DE BASE DE DATOS

### **Hacer backup**
```powershell
pg_dump -U postgres -d netflis_db > backup_netflis.sql
```

### **Restaurar backup**
```powershell
psql -U postgres -d netflis_db < backup_netflis.sql
```

---

¡Todo listo para desarrollar! 🎉
