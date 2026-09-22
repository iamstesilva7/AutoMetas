@echo off
chcp 65001 >nul
cd /d "%~dp0"
title AutoMeta 5055 - NAO FECHE ESTA JANELA

echo ======================================================
echo AUTOMETA - BUILD OUTLOOK-5055-20260828-1907
echo ======================================================
echo.
echo Esta versao usa a porta 5055 para evitar servidor antigo.
echo NAO abra index1.html manualmente.
echo Aguarde o navegador abrir sozinho.
echo.

start "" cmd /c "timeout /t 2 /nobreak >nul & start http://127.0.0.1:5055"
python servidor.py

echo.
echo O servidor terminou ou ocorreu um erro.
echo Copie ou fotografe tudo que apareceu acima.
pause
