Projeto de API com Node.js, NestJS, Docker, PostgreSQL e Prisma

Este é um projeto de API desenvolvido com Node.js e NestJS, usando Docker para containerização e PostgreSQL para o banco de dados. O Prisma é utilizado como ORM para interagir com o banco de dados. Este README fornece instruções sobre como configurar, executar e desenvolver o projeto.
Tabela de Conteúdos

    Visão Geral
    Tecnologias Utilizadas
    Configuração do Ambiente
    Executando o Projeto
    Estrutura do Projeto
    Endpoints da API
    Configuração do Swagger
    Contribuindo
    Licença

Visão Geral

Este projeto é uma API RESTful que permite a criação e gerenciamento de usuários e outras entidades relacionadas. Ele utiliza as seguintes tecnologias:

    Node.js e NestJS para desenvolvimento da API.
    Docker para containerização do ambiente de desenvolvimento e produção.
    PostgreSQL como banco de dados.
    Prisma como ORM para gerenciamento do banco de dados.
    Swagger para documentação da API.
    Passport e bcrypt para autenticação e segurança.

Tecnologias Utilizadas

    Node.js: Plataforma para executar código JavaScript no lado do servidor.
    NestJS: Framework para construir aplicações backend com Node.js.
    Docker: Plataforma para criar, implantar e gerenciar containers.
    PostgreSQL: Sistema de gerenciamento de banco de dados relacional.
    Prisma: ORM para interagir com o banco de dados.
    Swagger: Ferramenta para documentar APIs.
    Passport: Middleware para autenticação.
    bcrypt: Biblioteca para hashing de senhas.

Configuração do Ambiente
Pré-requisitos

Certifique-se de que você tenha o Docker e o Docker Compose instalados em sua máquina.
Configuração do Docker

    Clone o repositório:

    sh

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Configure o arquivo .env:

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

env

DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
JWT_SECRET=your-jwt-secret

Inicie os containers Docker:

sh

    docker-compose up --build

    Isso irá iniciar o PostgreSQL e o serviço backend em containers Docker.

Configuração do Prisma

    Crie e aplique migrações:

    sh

    docker-compose exec backend npx prisma migrate dev --name init

    Isso criará a base de dados e aplicará as migrações.

Executando o Projeto

Para iniciar o servidor backend, execute:

sh

docker-compose up backend

O servidor estará disponível em http://localhost:3000.
Estrutura do Projeto

    src: Contém o código fonte da aplicação.
        auth: Módulo de autenticação.
        users: Módulo de usuários.
        config: Configurações do projeto.
        main.ts: Ponto de entrada da aplicação.
    prisma: Contém o esquema do Prisma e arquivos de migração.
    docker-compose.yml: Arquivo de configuração do Docker Compose.
    Dockerfile: Arquivo de configuração para a construção da imagem Docker.
    .env: Arquivo de variáveis de ambiente.

Endpoints da API

    POST /users: Cria um novo usuário.
    GET /users: Recupera a lista de usuários.

Veja a documentação completa da API em http://localhost:3000/api após iniciar o servidor.
Configuração do Swagger

Para configurar o Swagger no projeto, adicione as anotações apropriadas aos seus controladores e DTOs. Veja a documentação no Swagger para mais detalhes sobre como usar e configurar a documentação da API.
Contribuindo

Contribuições são bem-vindas! Para contribuir com o projeto, siga estes passos:

    Faça um fork do repositório.
    Crie uma nova branch (git checkout -b feature/novo-recurso).
    Faça suas alterações e teste.
    Envie um pull request.

Licença

Este projeto está licenciado sob a Licença MIT.
