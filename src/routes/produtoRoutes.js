const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();


router.post('/', produtoController.criarProduto);

module.exports = router;