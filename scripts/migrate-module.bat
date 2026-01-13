@echo off
REM Script Windows pour migrer un module existant
REM Usage: scripts\migrate-module.bat <module-name>

if "%1"=="" (
    echo.
    echo ❌ Module name is required!
    echo.
    echo Usage: scripts\migrate-module.bat ^<module-name^>
    echo Example: scripts\migrate-module.bat users
    echo.
    pause
    exit /b 1
)

node scripts\migrate-module.js %1

pause
