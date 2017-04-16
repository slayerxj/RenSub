@echo off & setlocal EnableDelayedExpansion 

set a=1
for /f "delims=" %%i in ('dir /b *') do (
  if not "%%~nxi"=="%~nx0" (
    ren "%%i" "!a!" 
    set /a a+=1
 ) 
)