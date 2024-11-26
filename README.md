# API de Gerenciamento de Posts, Usuários e Tags

Esta API foi criada com **Express.js** e **Prisma** para gerenciar posts, usuários e tags. Ela oferece endpoints para realizar operações de CRUD em cada uma dessas entidades.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express.js**: Framework para a criação de APIs.
- **Prisma**: ORM para modelagem e interação com o banco de dados.
- **PostgreSQL**: Banco de dados relacional.
- **JavaScript**: Linguagem principal.

## Configuração do Ambiente

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/sua-api.git
   ```

2. **Instalar as dependências**:

   ```bash
   npm install
   ```

3. **Configurar as variáveis de ambiente**:
   - Crie um arquivo `.env` com a seguinte variável:
     ```
     DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
     ```

4. **Executar as migrações do banco de dados**:

   ```bash
   npx prisma migrate dev
   ```

5. **Iniciar o servidor**:

   ```bash
   npm start
   ```

6. O servidor estará disponível em: [http://localhost:3000](http://localhost:3000).

---

## Endpoints da API

### Usuários (`/api/users`)
- **GET `/api/users`**: Retorna todos os usuários cadastrados.
- **POST `/api/users`**: Cria um novo usuário.
  - **Body**:
    ```json
    {
      "email": "user@example.com",
      "name": "Nome do Usuário"
    }
    ```

### Posts (`/api/posts`)
- **GET `/api/posts`**: Retorna todos os posts cadastrados.
- **POST `/api/posts`**: Cria um novo post.
  - **Body**:
    ```json
    {
      "title": "Título do Post",
      "content": "Conteúdo do Post",
      "authorId": 1
    }
    ```

### Tags (`/api/tags`)
- **GET `/api/tags`**: Retorna todas as tags cadastradas.
- **POST `/api/tags`**: Cria uma nova tag.
  - **Body**:
    ```json
    {
      "name": "Nome da Tag"
    }
    ```

---

## Estrutura do Banco de Dados

### Post
| Campo      | Tipo      | Descrição                          |
|------------|-----------|------------------------------------|
| id         | Int       | Identificador único.              |
| createdAt  | DateTime  | Data de criação.                  |
| updatedAt  | DateTime  | Data de última atualização.       |
| title      | String    | Título do post.                   |
| content    | String?   | Conteúdo do post (opcional).      |
| published  | Boolean   | Indica se o post está publicado.  |
| authorId   | Int?      | Identificador do autor (opcional).|

### User
| Campo      | Tipo      | Descrição                          |
|------------|-----------|------------------------------------|
| id         | Int       | Identificador único.              |
| email      | String    | E-mail do usuário (único).        |
| name       | String?   | Nome do usuário (opcional).       |

### Tag
| Campo      | Tipo      | Descrição                          |
|------------|-----------|------------------------------------|
| id         | Int       | Identificador único.              |
| name       | String    | Nome da tag.                      |

---

## Estrutura do Projeto

```
.
├── prisma/
│   ├── schema.prisma      # Definição do banco de dados.
├── routes/
│   ├── users.js           # Rotas para usuários.
│   ├── posts.js           # Rotas para posts.
│   ├── tags.js            # Rotas para tags.
├── .env                   # Variáveis de ambiente.
├── package.json           # Dependências do projeto.
├── server.js              # Configuração do servidor Express.
```
