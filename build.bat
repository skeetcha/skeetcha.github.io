@echo off
wasm-pack build --target web
del pkg\.gitignore
pause
