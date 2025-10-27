# ===============================================
# SCRIPT DE INSTALACIÓN AUTOMATIZADA - NETFLIS
# Para Windows PowerShell
# ===============================================

Write-Host "
╔═══════════════════════════════════════════════╗
║   🎬 NETFLIS - Instalación Automatizada      ║
║   Sistema de Streaming con Clean Architecture ║
╚═══════════════════════════════════════════════╝
" -ForegroundColor Cyan

# Verificar Node.js
Write-Host "`n[1/6] Verificando Node.js..." -ForegroundColor Yellow
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js instalado: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js no está instalado. Por favor instala Node.js desde https://nodejs.org" -ForegroundColor Red
    exit
}

# Verificar PostgreSQL
Write-Host "`n[2/6] Verificando PostgreSQL..." -ForegroundColor Yellow
if (Get-Command psql -ErrorAction SilentlyContinue) {
    Write-Host "✅ PostgreSQL instalado" -ForegroundColor Green
} else {
    Write-Host "⚠️  PostgreSQL no detectado. Asegúrate de instalarlo desde https://www.postgresql.org/download/" -ForegroundColor Yellow
}

# Instalar dependencias del backend
Write-Host "`n[3/6] Instalando dependencias del backend..." -ForegroundColor Yellow
Set-Location backend
if (Test-Path "node_modules") {
    Write-Host "📦 node_modules ya existe, saltando..." -ForegroundColor Gray
} else {
    npm install
    Write-Host "✅ Dependencias del backend instaladas" -ForegroundColor Green
}

# Configurar .env del backend
Write-Host "`n[4/6] Configurando backend..." -ForegroundColor Yellow
if (!(Test-Path ".env")) {
    Copy-Item ".env.example" ".env"
    Write-Host "✅ Archivo .env creado en backend/" -ForegroundColor Green
    Write-Host "⚠️  IMPORTANTE: Edita backend/.env con tu contraseña de PostgreSQL" -ForegroundColor Yellow
} else {
    Write-Host "✅ Archivo .env ya existe" -ForegroundColor Green
}

# Instalar dependencias del frontend
Write-Host "`n[5/6] Instalando dependencias del frontend..." -ForegroundColor Yellow
Set-Location ..
if (Test-Path "node_modules") {
    Write-Host "📦 node_modules ya existe, saltando..." -ForegroundColor Gray
} else {
    npm install
    Write-Host "✅ Dependencias del frontend instaladas" -ForegroundColor Green
}

# Configurar .env del frontend
Write-Host "`n[6/6] Configurando frontend..." -ForegroundColor Yellow
if (!(Test-Path ".env")) {
    Copy-Item ".env.example" ".env"
    Write-Host "✅ Archivo .env creado" -ForegroundColor Green
} else {
    Write-Host "✅ Archivo .env ya existe" -ForegroundColor Green
}

# Resumen final
Write-Host "
╔═══════════════════════════════════════════════╗
║          ✅ INSTALACIÓN COMPLETADA            ║
╚═══════════════════════════════════════════════╝

📋 PRÓXIMOS PASOS:

1️⃣  Editar backend/.env con tu contraseña de PostgreSQL:
   notepad backend\.env

2️⃣  Crear la base de datos:
   psql -U postgres
   CREATE DATABASE netflis_db;
   \q

3️⃣  Ejecutar migraciones:
   cd backend
   psql -U postgres -d netflis_db -f src/infrastructure/database/migrations/001_create_tables.sql

4️⃣  Poblar datos de prueba:
   npm run db:seed

5️⃣  Iniciar backend (Terminal 1):
   cd backend
   npm run dev

6️⃣  Iniciar frontend (Terminal 2):
   npm run dev

📚 Documentación:
   - GUIA_COMPLETA.md      → Guía paso a paso
   - ARQUITECTURA.md       → Diagramas y arquitectura
   - COMANDOS_RAPIDOS.md   → Comandos útiles

🌐 URLs:
   - Frontend: http://localhost:5173
   - Backend:  http://localhost:3000

¡Todo listo para empezar! 🚀
" -ForegroundColor Green
