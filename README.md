# 📝 Gestor de Tarefas API

API REST desenvolvida com Node.js e Express para gerenciamento de usuários e tarefas (to-dos), com autenticação utilizando JWT.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* JSON Web Token (JWT)
* JavaScript (ES6+)

---

## 📁 Estrutura do projeto

```bash
gestor-to-do/
│
├── controllers/       # Regras de negócio
├── routes/            # Definição das rotas
├── middlewares/       # Autenticação (JWT)
├── database/          # Simulação de banco de dados
├── utils/             # Funções auxiliares (ex: gerar ID)
│
├── index.js           # Arquivo principal do servidor
├── package.json
└── package-lock.json
```

---

## 📌 Funcionalidades

### 👤 Usuários

* Criar usuário
* Listar usuários
* Atualizar usuário
* Deletar usuário

### 🔐 Autenticação

* Login com email e senha
* Geração de token JWT
* Proteção de rotas

### 📝 Tarefas

* Criar tarefa (protegido 🔒)
* Listar tarefas do usuário (protegido 🔒)
* Atualizar tarefa (protegido 🔒)
* Deletar tarefa (protegido 🔒)

---

## ⚙️ Como executar o projeto

### 1. Acesse a pasta do projeto

```bash
cd "gestor to-do"
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
node index.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

## 🔐 Autenticação

Após realizar o login, utilize o token JWT no header das requisições protegidas:

```
Authorization: Bearer SEU_TOKEN
```

---

## 📬 Rotas da API

### 👤 Usuários

| Método | Rota       | Descrição         |
| ------ | ---------- | ----------------- |
| POST   | /users     | Criar usuário     |
| GET    | /users     | Listar usuários   |
| PUT    | /users/:id | Atualizar usuário |
| DELETE | /users/:id | Deletar usuário   |

---

### 🔐 Autenticação

| Método | Rota   | Descrição |
| ------ | ------ | --------- |
| POST   | /login | Login     |

---

### 📝 To-dos (Protegido 🔒)

| Método | Rota       | Descrição                 |
| ------ | ---------- | ------------------------- |
| POST   | /todos     | Criar tarefa              |
| GET    | /todos     | Listar tarefas do usuário |
| PUT    | /todos/:id | Atualizar tarefa          |
| DELETE | /todos/:id | Deletar tarefa            |

---

## 🧪 Exemplos de uso

### Criar usuário

```json
{
  "nome": "Rafael",
  "email": "rafael@email.com",
  "senha": "123456"
}
```

---

### Login

```json
{
  "email": "rafael@email.com",
  "senha": "123456"
}
```

---

### Criar tarefa

```json
{
  "title": "Estudar Node.js"
}
```

---

## ⚠️ Validações implementadas

* Campos obrigatórios (nome, email, senha)
* Email válido
* Email único
* Senha com tamanho mínimo
* Título da tarefa obrigatório
* Autenticação via token nas rotas protegidas

---

## 🧠 Melhorias futuras

* Criptografia de senha com bcrypt
* Integração com banco de dados (MongoDB ou PostgreSQL)
* Organização em camadas (services/repositories)
* Tratamento global de erros
* Deploy da aplicação

---

## 👨‍💻 Autor

**Caua Azevedo**

📍 Estudante de Sistemas de Informação
🚀 Focado em desenvolvimento backend e APIs REST

---

## 📄 Licença

Este projeto está sob a licença MIT.
