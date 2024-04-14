#!/bin/bash

# Diretório raiz onde estão os diretórios dos projetos
ROOT_DIR="$(pwd)"

# Diretório do core-app
cd "$ROOT_DIR/core-app" || exit
npm install
npm run dev
cd ..

# Diretório do micro-app-a
cd "$ROOT_DIR/micro-app-a" || exit
npm install
npm run deploy
cd ..

# Diretório do micro-app-b
cd "$ROOT_DIR/micro-app-b" || exit
npm install
npm run deploy
cd ..

# Diretório do micro-app-c
cd "$ROOT_DIR/micro-app-c" || exit
npm install
npm run deploy
cd ..
