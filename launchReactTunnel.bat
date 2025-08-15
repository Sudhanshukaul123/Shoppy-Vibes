@echo off
title React Dev + LocalTunnel Launcher
echo 🚀 Launching React App...
start cmd /k "npm start"
timeout /t 10 >nul
echo 🌐 Opening LocalTunnel...
start cmd /k "npx localtunnel --port"
echo ✅ Everything’s LIVE!
pause
