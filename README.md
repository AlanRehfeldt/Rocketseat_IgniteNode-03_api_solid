# GymPass style app

## Descrição do Projeto

Este projeto é uma aplicação de gerenciamento de academias, desenvolvida para fornecer uma experiência robusta e segura para usuários e administradores. A aplicação foi construída utilizando Fastify, TypeScript e Prisma ORM, garantindo a aplicação dos princípios do SOLID e as melhores práticas de desenvolvimento.

## Requisitos funcionais

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar por academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário buscar realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## Regras de negócio

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer dois check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estar perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

## Requisitos não-funcionais

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco prostgresSQL;
- [x] Todas listas de dados precisam estar páginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (Json Web Token);

## Instalação

Para rodar este projeto, siga os passos abaixo:

1. Clone o repositório:

    ```bash
    git clone https://github.com/AlanRehfeldt/Rocketseat_IgniteNode-03_api_solid
    cd cd Rocketseat_IgniteNode-03_api_solid
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:

    - Copie o arquivo `.env.exemple` para `.env` e ajuste as variáveis conforme necessário.

## Uso

### Executando o Banco de Dados e Migrations

Para configurar e executar o banco de dados, siga os passos abaixo:

1. Crie e inicie o container Docker:

    ```bash
    docker-compose up -d
    ```

2. Execute as migrações do banco de dados:

    ```bash
    npx prisma migrate deploy
    ```

3. Rode o comando de geração do prisma:

    ```bash
    npx prisma generate
    ```

### Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento, execute:

```bash
npm run start:dev
```

### Rodando Testes

Para executar os testes unitários, use o comando:

```bash
npm run test
```

Para executar os testes E2E, use o comando:

```bash
npm run test:e2e
```

## Rotas da Aplicação

### Clientes

- `POST /users` - Criação de um novo usuário
- `GET /me` - Obtenção dos dados do usuário logado
- `GET /sessions` - Autenticação do usuário
- `PATCH /token/refresh` - Atualização do token de acesso

### Academias

- `POST /gyms` - Criação de uma nova academia
- `GET /gyms/search` - Busca de academias por nome
- `GET /gyms/nearby` - Busca de academias por localização

### Check-ins

- `POST /gyms/:gymId/check-ins` - Realização de um novo check-in
- `PATCH /check-ins/:checkInId/validate` - Validação de um check-in
- `GET /check-ins/history` - Obtenção do histórico de check-ins do usuário
- `GET /check-ins/metrics` - Obtenção dos dados de métricas do usuário

## Patterns Utilizados

- **Repository Pattern**: Utilizado para abstrair a lógica de acesso a dados, promovendo a separação de responsabilidades e facilitando a troca da camada de persistência.
- **In-Memory Pattern**: Implementação em memória dos repositórios para facilitar os testes e o desenvolvimento.
- **Factory Pattern**: Utilizado para criar instâncias de objetos de forma centralizada, promovendo a reutilização de código e a flexibilidade na criação de objetos.
- **Dependency Injection**: Promovendo a inversão de controle e a injeção de dependências, facilitando a manutenção e o teste das classes.

## Permissionamento

- **RBAC**: Modelo de permissão baseado em papéis, onde o usuário pode ter acesso a determinadas funcionalidades de acordo com o papel que o possui.

## Tecnologias Utilizadas

- **Fastify**: Micro framework para construção de aplicações Node.js de alta performance.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao idioma.
- **Prisma ORM**: Ferramenta para manipulação de banco de dados e mapeamento objeto-relacional.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em containers.
- **JWT**: Biblioteca para criação e validação de tokens.
- **Zod**: Biblioteca para validação de dados.
- **Vitest**: Biblioteca para testes unitários com alto desempenho.
- **Supertest**: Biblioteca para testes de API REST.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.