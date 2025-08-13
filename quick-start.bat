@echo off
echo ========================================
echo    Zoom Hello World App - Quick Start
echo ========================================
echo.

echo Installing dependencies...
npm install

echo.
echo Building the app...
npm run build:dev

echo.
echo Starting development server...
echo App will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause


