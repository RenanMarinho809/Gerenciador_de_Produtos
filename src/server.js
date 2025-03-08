const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');
const connectDB = require('./config/database');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/produtos', produtoRoutes);

connectDB();

const porta = 3000;

app.listen(porta, () => {console.log(`Servidor rodando na porta ${porta}`);});