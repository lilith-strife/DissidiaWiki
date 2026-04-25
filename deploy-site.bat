@echo off
setlocal
node "%~dp0scripts\deploy-gh-pages.mjs"
set EXIT_CODE=%ERRORLEVEL%
endlocal & exit /b %EXIT_CODE%
