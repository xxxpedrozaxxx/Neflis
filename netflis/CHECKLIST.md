# ✅ CHECKLIST DE VERIFICACIÓN - NETFLIS

## 📋 ANTES DE EMPEZAR

### **Requisitos del Sistema**
```
□ Node.js v18+ instalado
□ PostgreSQL v14+ instalado
□ Git instalado (opcional)
□ VS Code o editor de código
□ Navegador web moderno
```

**Verificar Node.js:**
```powershell
node --version    # Debe mostrar v18.x.x o superior
npm --version     # Debe mostrar 9.x.x o superior
```

**Verificar PostgreSQL:**
```powershell
psql --version    # Debe mostrar 14.x o superior
```

---

## 📦 INSTALACIÓN

### **Paso 1: Dependencias del Backend**
```
□ Navegar a carpeta backend/
□ Ejecutar: npm install
□ Sin errores en la instalación
□ Carpeta node_modules/ creada
```

**Verificación:**
```powershell
cd backend
ls node_modules  # Debe listar paquetes instalados
```

### **Paso 2: Configuración Backend**
```
□ Archivo .env creado en backend/
□ DB_HOST configurado
□ DB_PORT configurado (5432)
□ DB_NAME configurado (netflis_db)
□ DB_USER configurado
□ DB_PASSWORD configurado
□ JWT_SECRET configurado
```

**Verificación:**
```powershell
cat backend/.env  # Debe mostrar las variables
```

### **Paso 3: Base de Datos**
```
□ PostgreSQL está corriendo
□ Base de datos 'netflis_db' creada
□ Migraciones ejecutadas (tablas creadas)
□ Datos de prueba insertados (seed)
```

**Verificación:**
```powershell
psql -U postgres -d netflis_db -c "SELECT COUNT(*) FROM users;"
psql -U postgres -d netflis_db -c "SELECT COUNT(*) FROM content;"
psql -U postgres -d netflis_db -c "SELECT COUNT(*) FROM my_list;"
```

**Resultado esperado:**
```
users: 0 (al inicio)
content: 10
my_list: 0 (al inicio)
```

### **Paso 4: Dependencias del Frontend**
```
□ Navegar a carpeta raíz
□ Ejecutar: npm install
□ Sin errores en la instalación
□ Carpeta node_modules/ creada
```

**Verificación:**
```powershell
cd ..
ls node_modules  # Debe listar paquetes instalados
```

### **Paso 5: Configuración Frontend**
```
□ Archivo .env creado en raíz
□ VITE_API_URL configurado (http://localhost:3000/api)
```

**Verificación:**
```powershell
cat .env  # Debe mostrar VITE_API_URL
```

---

## 🚀 EJECUCIÓN

### **Backend**
```
□ Terminal 1 abierta
□ Navegar a backend/
□ Ejecutar: npm run dev
□ Mensaje: "✅ Conectado a PostgreSQL"
□ Mensaje: "🚀 Servidor ejecutándose en http://localhost:3000"
□ Sin errores
```

**Verificación:**
```powershell
# En otra terminal
curl http://localhost:3000/api/health
```

**Resultado esperado:**
```json
{"status":"OK","message":"Servidor Netflis funcionando correctamente"}
```

### **Frontend**
```
□ Terminal 2 abierta
□ Navegar a raíz del proyecto
□ Ejecutar: npm run dev
□ Mensaje: "Local: http://localhost:5173/"
□ Sin errores
```

**Verificación:**
```powershell
# Abrir navegador
start http://localhost:5173
```

**Resultado esperado:**
```
□ Página de Login carga correctamente
□ Sin errores en consola del navegador
□ Estilos aplicados correctamente
```

---

## 🧪 PRUEBAS FUNCIONALES

### **Test 1: Registro de Usuario**
```
□ Abrir http://localhost:5173
□ Clic en "Suscríbete ahora"
□ Llenar formulario:
   - Nombre: Test User
   - Email: test@test.com
   - Password: 123456
□ Clic en "Registrarse"
□ Mensaje de éxito
□ Redirige a Login
```

### **Test 2: Login**
```
□ En pantalla de Login
□ Ingresar:
   - Email: test@test.com
   - Password: 123456
□ Clic en "Iniciar sesión"
□ Login exitoso
□ Redirige a Home (o vista principal)
```

### **Test 3: Backend API**
```
□ Registrar usuario (POST /api/auth/register) ✅
□ Login (POST /api/auth/login) ✅
□ Token JWT generado ✅
□ Obtener películas (GET /api/content?type=movie) ✅
□ Obtener series (GET /api/content?type=series) ✅
□ Obtener destacado (GET /api/content/featured) ✅
```

**Verificación con Postman/curl:**
```powershell
# 1. Login
$response = curl -X POST http://localhost:3000/api/auth/login `
  -H "Content-Type: application/json" `
  -d '{\"email\":\"test@test.com\",\"password\":\"123456\"}'

# 2. Obtener películas (usa el token del login)
curl -X GET "http://localhost:3000/api/content?type=movie" `
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

---

## 🗃️ VERIFICACIÓN DE BASE DE DATOS

### **Estructura de Tablas**
```
□ Tabla 'users' existe
□ Tabla 'content' existe
□ Tabla 'my_list' existe
□ Índices creados correctamente
```

**Verificación:**
```powershell
psql -U postgres -d netflis_db -c "\dt"
```

**Resultado esperado:**
```
         List of relations
 Schema |  Name   | Type  |  Owner
--------+---------+-------+----------
 public | users   | table | postgres
 public | content | table | postgres
 public | my_list | table | postgres
```

### **Datos de Contenido**
```
□ 10 registros en tabla 'content'
□ Al menos 1 contenido marcado como 'featured'
□ Películas con type='movie'
□ Series con type='series'
```

**Verificación:**
```powershell
psql -U postgres -d netflis_db -c "SELECT title, type FROM content;"
```

---

## 📂 VERIFICACIÓN DE ARCHIVOS

### **Backend**
```
□ backend/src/index.ts existe
□ backend/src/domain/ tiene archivos
□ backend/src/application/ tiene archivos
□ backend/src/infrastructure/ tiene archivos
□ backend/src/presentation/ tiene archivos
□ backend/package.json existe
□ backend/tsconfig.json existe
□ backend/.env existe
```

### **Frontend**
```
□ src/modules/auth/ existe
□ src/modules/content/ existe
□ src/modules/mylist/ existe
□ src/shared/ existe
□ src/components/ existe
□ package.json existe
□ vite.config.ts existe
□ .env existe
```

### **Documentación**
```
□ README.md actualizado
□ INDICE.md existe
□ RESUMEN.md existe
□ GUIA_COMPLETA.md existe
□ ARQUITECTURA.md existe
□ COMANDOS_RAPIDOS.md existe
□ backend/README.md existe
```

---

## 🔐 SEGURIDAD

### **Variables de Entorno**
```
□ backend/.env NO está en git
□ .env NO está en git
□ .gitignore incluye .env
□ JWT_SECRET es único (no usar el de ejemplo)
□ DB_PASSWORD es segura
```

### **Autenticación**
```
□ Passwords encriptados con bcrypt
□ JWT firmado correctamente
□ Middleware de autenticación funciona
□ Rutas protegidas requieren token
```

---

## 🌐 CONECTIVIDAD

### **Puertos**
```
□ Puerto 3000 (backend) está libre
□ Puerto 5173 (frontend) está libre
□ Puerto 5432 (PostgreSQL) está libre
```

**Verificación:**
```powershell
netstat -ano | findstr :3000
netstat -ano | findstr :5173
netstat -ano | findstr :5432
```

### **CORS**
```
□ Backend acepta peticiones desde http://localhost:5173
□ Headers CORS configurados
□ No hay errores CORS en consola
```

---

## 📊 RENDIMIENTO

### **Backend**
```
□ Servidor inicia en < 5 segundos
□ Respuestas API en < 500ms
□ Conexión a DB estable
```

### **Frontend**
```
□ Página carga en < 3 segundos
□ Navegación fluida
□ Sin errores en consola
```

---

## 🎨 UI/UX

### **Diseño**
```
□ Logo "NEFLIS" visible
□ Colores correctos (rojo #E50914)
□ Formularios centrados
□ Botones funcionan
□ Inputs aceptan texto
□ Checkboxes funcionan
```

### **Responsividad**
```
□ Se ve bien en desktop
□ Se ve bien en móvil (opcional)
□ Sin elementos fuera de pantalla
```

---

## 📱 NAVEGADOR

### **Compatibilidad**
```
□ Funciona en Chrome
□ Funciona en Edge
□ Funciona en Firefox
□ Sin errores en consola
```

---

## 🐛 COMMON ISSUES

### **Si algo falla:**

**Backend no inicia:**
```
□ Verificar PostgreSQL está corriendo
□ Verificar credenciales en .env
□ Verificar puerto 3000 libre
□ Revisar logs de error
```

**Frontend no carga:**
```
□ Verificar backend está corriendo
□ Verificar VITE_API_URL en .env
□ Verificar puerto 5173 libre
□ Limpiar caché del navegador
```

**Base de datos:**
```
□ Verificar PostgreSQL servicio activo
□ Verificar base de datos existe
□ Verificar tablas creadas
□ Verificar datos de prueba insertados
```

---

## ✅ CHECKLIST FINAL

### **Todo listo para presentar:**
```
□ Backend funciona ✅
□ Frontend funciona ✅
□ Base de datos poblada ✅
□ Registro funciona ✅
□ Login funciona ✅
□ API responde ✅
□ Documentación completa ✅
□ Sin errores en consola ✅
□ Arquitectura clara ✅
□ Código organizado ✅
```

---

## 🎉 ¡TODO VERIFICADO!

Si todos los checks están marcados (✅), tu proyecto está **100% listo** para:
- ✨ Desarrollo
- 📊 Presentación en clase
- 🎓 Demostración

---

## 📝 NOTAS

Espacio para tus anotaciones:

```
_____________________________________________
_____________________________________________
_____________________________________________
_____________________________________________
_____________________________________________
```

---

**Fecha de verificación:** _______________

**Verificado por:** _______________

**Estado:** □ LISTO  □ PENDIENTE  □ CON ERRORES
