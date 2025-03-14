# 🛒 API de Gerenciamento de Produtos  

Essa API foi desenvolvida utilizando **JavaScript**, **Node.js** e **MongoDB** 🟢, implementando o método **CRUD** (Create, Read, Update, Delete) para o gerenciamento de produtos 📦.  

## 🚀 Tecnologias Utilizadas  

- **Node.js** 🟢 - Ambiente de execução para JavaScript no lado do servidor.  
- **Express.js** ⚡ - Framework minimalista para criação de APIs.  
- **MongoDB** 🍃 - Banco de dados NoSQL para armazenar os produtos.  
- **Mongoose** 🔗 - ODM para modelagem dos dados no MongoDB.  

## 🔧 Funcionalidades  

- **📌 Criar um produto** - Adicionar um novo produto ao banco de dados.  
- **📄 Listar produtos** - Retornar todos os produtos cadastrados.   
- **✏️ Atualizar produto** - Modificar informações de um produto existente.  
- **🗑️ Remover produto** - Excluir um produto do banco de dados.  

## 📡 Rotas da API  

| Método | Rota           | Descrição                           |
|--------|---------------|-----------------------------------|
| `POST` | `/`   | 🆕 Criar um novo produto.        |
| `GET`  | `/`   | 📋 Listar todos os produtos.     |
| `PUT`  | `/:id` | ✏️ Atualizar um produto.        |
| `DELETE` | `/:id` | 🗑️ Remover um produto.        |
