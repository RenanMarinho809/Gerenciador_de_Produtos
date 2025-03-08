const express = require('express');
const router = require('./routes/produtoRoutes');

const app = express();
app.use(express.json());

app.use(router);

const porta = 3000;

app.listen(porta, () => {console.log(`Servidor rodando na porta ${porta}`);});