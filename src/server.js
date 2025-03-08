const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');
const connectDB = require('./config/database');

const app = express();
app.use(express.json());

app.use('/produtos', produtoRoutes);

connectDB();

const porta = 3000;

app.listen(porta, () => {console.log(`Servidor rodando na porta ${porta}`);});