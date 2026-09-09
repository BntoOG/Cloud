@echo off
chcp 65001 >nul
title Portfolio - Eduardo Bento
cd /d "%~dp0"

echo ================================================
echo   Iniciando o Portfolio de Eduardo Bento
echo ================================================
echo.

REM Garante que o Node.js esteja no PATH desta janela
set "PATH=%ProgramFiles%\nodejs;%PATH%"

REM Verifica se o Node esta disponivel
where node >nul 2>nul
if errorlevel 1 (
    echo [ERRO] Node.js nao encontrado.
    echo Instale em https://nodejs.org e tente novamente.
    echo.
    pause
    exit /b 1
)

REM Instala as dependencias apenas se ainda nao existirem
if not exist "node_modules" (
    echo Instalando dependencias pela primeira vez, aguarde...
    echo.
    call npm install
    echo.
)

echo Iniciando o servidor... aguarde a mensagem "Local: http://localhost:5173".
echo O navegador abrira automaticamente em alguns segundos.
echo Para PARAR o servidor, feche esta janela ou pressione Ctrl + C.
echo.

REM Aguarda alguns segundos e so entao abre o navegador (evita "conexao recusada")
start "" /b cmd /c "timeout /t 5 /nobreak >nul & start "" http://localhost:5173"

call npm run dev

pause
