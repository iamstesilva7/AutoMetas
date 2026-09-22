
@echo off
chcp 65001 >nul
cd /d "%~dp0"
title AutoMetas - NAO FECHE ESTA JANELA

echo ==========================================
echo          INICIANDO AUTOMETAS
echo ==========================================
echo.

if not exist ".venv\Scripts\python.exe" (
    echo Preparando ambiente Python...

    py -3 -m venv .venv
    if errorlevel 1 (
        echo ERRO: Python nao encontrado ou ambiente nao criado.
        echo Instale o Python e tente novamente.
        pause
        exit /b 1
    )

    echo Instalando dependencias...
    ".venv\Scripts\python.exe" -m pip install -r requirements.txt

    if errorlevel 1 (
        echo ERRO ao instalar dependencias.
        pause
        exit /b 1
    )
)

echo.
echo Iniciando servidor...
echo Aguarde o navegador abrir.
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul & start http://127.0.0.1:5055"

".venv\Scripts\python.exe" servidor.py

echo.
echo O servidor terminou ou ocorreu um erro.
pause
  
