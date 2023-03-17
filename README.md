# ThatGirl-ERP-BE
## API with Node.js + PostgreSQL + TypeORM: JWT Authentication

![API with Node.js + PostgreSQL + TypeORM: JWT Authentication](https://codevoweb.com/wp-content/uploads/2022/05/API-with-Node.js-PostgreSQL-TypeORM-JWT-Authentication.webp)

### Features

- List the Node.js API Routes
- User Login and Register Flow with JWT Authentication
- Defining Base and User Entities with TypeORM
- Defining Zod Schemas to Validate Request Body
- Create Middleware to Parse Zod Schema
- Password Management with Bcrypt
- Create Services to Interact with the Database
- Asymmetric Encryption (RS256 algorithm) Json Web Tokens
- Service to Sign Access and Refresh Tokens
- Error Handling in Express
- Create Authentication Route Controllers
- Create User Route Controller
- Create Authentication Middleware Guard
- Create the API Routes
    - Authentication Routes
    - User Routes
- Add the Routes to the Express Middleware Stack
- Run Database Migrations with TypeORM
- Inspect the Data with VS Code MySQL Extension


### Setup
```
yarn install
```

## Run Development
```
yarn start
```
It should be appeared like this in command line
```
$ yarn start
yarn run v1.22.19
$ ts-node-dev --respawn --transpile-only --exit-child src/app.ts
[INFO] 23:10:01 ts-node-dev ver. 1.1.8 (using ts-node ver. 9.1.1, typescript ver. 4.5.2)
Redis client connect successfully
Server started on port: 8000
```

## Create Migration
```
yarn migrate:create [path_to_file_name]
```

## Generate Migration From Entities
```
yarn migrate:gen && yarn migrate:up
```

## Push Schema Migration
```
yarn migrate:up
```