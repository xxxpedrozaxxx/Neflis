# ===============================================
# SCRIPT DE INICIO RÁPIDO - NETFLIS
# Para Windows PowerShell
# Abre 2 terminales: Backend y Frontend
# ===============================================

Write-Host "
╔═══════════════════════════════════════════════╗
║      🎬 NETFLIS - Iniciando Servidores       ║
╚═══════════════════════════════════════════════╝
" -ForegroundColor Cyan

# Verificar que las dependencias estén instaladas
if (!(Test-Path "backend/node_modules")) {
    Write-Host "❌ Backend no tiene dependencias instaladas." -ForegroundColor Red
    Write-Host "   Ejecuta: .\install.ps1" -ForegroundColor Yellow
    exit
}

if (!(Test-Path "node_modules")) {
    Write-Host "❌ Frontend no tiene dependencias instaladas." -ForegroundColor Red
    Write-Host "   Ejecuta: .\install.ps1" -ForegroundColor Yellow
    exit
}

# Verificar archivos .env
if (!(Test-Path "backend/.env")) {
    Write-Host "❌ backend/.env no existe." -ForegroundColor Red
    Write-Host "   Copia backend/.env.example y configúralo" -ForegroundColor Yellow
    exit
}

Write-Host "✅ Todo listo. Iniciando servidores...`n" -ForegroundColor Green

# Iniciar backend en nueva ventana
Write-Host "🔙 Iniciando Backend..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; Write-Host '🚀 Backend iniciando en http://localhost:3000' -ForegroundColor Green; npm run dev"

Start-Sleep -Seconds 2

# Iniciar frontend en nueva ventana
Write-Host "🎨 Iniciando Frontend..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; Write-Host '🚀 Frontend iniciando en http://localhost:5173' -ForegroundColor Green; npm run dev"

Start-Sleep -Seconds 3

# Abrir navegador
Write-Host "🌐 Abriendo navegador..." -ForegroundColor Yellow
Start-Sleep -Seconds 5
Start-Process "http://localhost:5173"

Write-Host "
╔═══════════════════════════════════════════════╗
║       ✅ SERVIDORES INICIADOS                 ║
╚═══════════════════════════════════════════════╝

🌐 URLs:
   - Frontend: http://localhost:5173
   - Backend:  http://localhost:3000

Para detener los servidores:
   Cierra las ventanas de PowerShell o presiona Ctrl+C

¡Disfruta desarrollando! 🚀
" -ForegroundColor Green
