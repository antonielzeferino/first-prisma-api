# API de Gerenciamento de Posts, Usuários e Tags

Esta API permite gerenciar posts, tags e usuários, oferecendo endpoints para criar, buscar, atualizar e excluir informações.

---

## Endpoints da API

### **Posts (`/api/posts`)**

#### **GET `/api/posts`**
- **Descrição:** Retorna todos os posts cadastrados.
- **Resposta:**  
  ```json
  [
    {
      "id": 1,
      "title": "Título do Post",
      "content": "Conteúdo do Post",
      "published": true,
      "authorId": 1
    }
  ]
  ```

#### **POST `/api/posts`**
- **Descrição:** Cria um novo post.
- **Body:**  
  ```json
  {
    "title": "Título do Post",
    "content": "Conteúdo do Post",
    "authorId": 1
  }
  ```
- **Resposta:**  
  ```json
  {
    "id": 1,
    "title": "Título do Post",
    "content": "Conteúdo do Post",
    "published": false,
    "authorId": 1
  }
  ```

#### **GET `/api/posts/search`**
- **Descrição:** Busca posts por parâmetros de pesquisa.
- **Query Params:** 
  - `title`: (opcional) Filtra posts pelo título.
  - `authorId`: (opcional) Filtra posts por autor.
- **Exemplo:** `/api/posts/search?title=Tutorial`
- **Resposta:**  
  ```json
  [
    {
      "id": 1,
      "title": "Tutorial de API",
      "content": "Conteúdo",
      "authorId": 1
    }
  ]
  ```

#### **GET `/api/posts/:id`**
- **Descrição:** Retorna detalhes de um post específico.
- **Resposta:**  
  ```json
  {
    "id": 1,
    "title": "Título do Post",
    "content": "Conteúdo do Post",
    "authorId": 1
  }
  ```

#### **PUT `/api/posts/:id`**
- **Descrição:** Atualiza os dados de um post existente.
- **Body:**  
  ```json
  {
    "title": "Título Atualizado",
    "content": "Novo conteúdo"
  }
  ```
- **Resposta:**  
  ```json
  {
    "id": 1,
    "title": "Título Atualizado",
    "content": "Novo conteúdo",
    "authorId": 1
  }
  ```

---

### **Tags (`/api/tags`)**

#### **GET `/api/tags`**
- **Descrição:** Retorna todas as tags cadastradas.
- **Resposta:**  
  ```json
  [
    { "id": 1, "name": "Tag 1" },
    { "id": 2, "name": "Tag 2" }
  ]
  ```

#### **POST `/api/tags`**
- **Descrição:** Cria uma nova tag.
- **Body:**  
  ```json
  {
    "name": "Nova Tag"
  }
  ```
- **Resposta:**  
  ```json
  {
    "id": 1,
    "name": "Nova Tag"
  }
  ```

#### **GET `/api/tags/:id`**
- **Descrição:** Retorna detalhes de uma tag específica.
- **Resposta:**  
  ```json
  {
    "id": 1,
    "name": "Tag 1"
  }
  ```

#### **PUT `/api/tags/:id`**
- **Descrição:** Atualiza os dados de uma tag existente.
- **Body:**  
  ```json
  {
    "name": "Tag Atualizada"
  }
  ```
- **Resposta:**  
  ```json
  {
    "id": 1,
    "name": "Tag Atualizada"
  }
  ```

---

### **Usuários (`/api/users`)**

#### **GET `/api/users`**
- **Descrição:** Retorna todos os usuários cadastrados.
- **Resposta:**  
  ```json
  [
    { "id": 1, "email": "user1@example.com", "name": "Usuário 1" }
  ]
  ```

#### **POST `/api/users`**
- **Descrição:** Cria um novo usuário.
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "name": "Novo Usuário"
  }
  ```
- **Resposta:**  
  ```json
  {
    "id": 1,
    "email": "user@example.com",
    "name": "Novo Usuário"
  }
  ```

#### **GET `/api/users/:id`**
- **Descrição:** Retorna detalhes de um usuário específico.
- **Resposta:**  
  ```json
  {
    "id": 1,
    "email": "user@example.com",
    "name": "Usuário 1"
  }
  ```

#### **PUT `/api/users/:id`**
- **Descrição:** Atualiza os dados de um usuário existente.
- **Body:**  
  ```json
  {
    "name": "Usuário Atualizado"
  }
  ```
- **Resposta:**  
  ```json
  {
    "id": 1,
    "email": "user@example.com",
    "name": "Usuário Atualizado"
  }
  ```

#### **DELETE `/api/users/:id`**
- **Descrição:** Remove um usuário.
- **Resposta:**  
  ```json
  {
    "message": "Usuário deletado com sucesso."
  }
  ```