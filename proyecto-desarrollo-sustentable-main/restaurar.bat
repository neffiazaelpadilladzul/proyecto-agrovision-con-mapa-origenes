@echo off
git reset --hard v1.0-original >nul 2>&1
git clean -fd >nul 2>&1
if exist .backup_original (
    copy /y .backup_original\*.html .\ >nul 2>&1
    copy /y .backup_original\*.png .\ >nul 2>&1
    copy /y .backup_original\*.md .\ >nul 2>&1
    xcopy /y /e /i .backup_original\css css >nul 2>&1
    xcopy /y /e /i .backup_original\js js >nul 2>&1
)
echo ========================================================
echo PROYECTO RESTAURADO EXITOSAMENTE AL PUNTO ORIGINAL
echo Todos los archivos regresaron a su estado funcional.
echo ========================================================
pause
