@echo off
wasm-pack build --target no-modules
del pkg\.gitignore
pause
