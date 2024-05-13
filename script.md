# Iniciliazado a aplicação

- npm init -y
- Criar pasta src
- Na pasta src, criar arquivo server.ts e app.ts

- Instalar typescript @type/no tsx tsup

  - npm i typescript @types/node tsx tsup -D

- Instalar fastify

  - npm i fastify

- Criar arquivo tsconfig

  - npx tsc --init

- No arquivo app.ts

  - Importar fastify
  - exportar app

- No arquivo server.ts

  - Importar app
  - Ouvir a porta 3333

- No arquivo packagin.json
  - Criar script de dev, start e build
