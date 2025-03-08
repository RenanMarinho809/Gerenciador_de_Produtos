const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();


router.post('/', produtoController.criarProduto);
router.get('/', produtoController.listarProdutos);
router.put('/:id', produtoController.atualizarProduto);

module.exports = router;