# API de Contatos

API simples para gerenciamento de contatos desenvolvida com **Node.js**, **Express** e **MySQL**.

O projeto utiliza **Docker** para facilitar a execução do ambiente.

---

# Pré-requisitos

Antes de executar o projeto é necessário ter instalado:

- Docker
- Docker Compose

---

# Configuração

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`.

```
PORT=3000

DB_HOST=mysql
DB_USER=root
DB_PASSWORD=root
DB_NAME=contatos_db
```

---

# Executando o Projeto

Na raiz do projeto execute o comando:

```
docker compose up --build
```

Após a inicialização, a API estará disponível em:

```
http://localhost:3000
```

O banco de dados e a tabela são criados automaticamente durante a inicialização do container.

---

# Testando a API

O projeto possui o arquivo:

```
teste.http
```

Esse arquivo pode ser utilizado com a extensão **REST Client** do VSCode para testar os endpoints da API.
