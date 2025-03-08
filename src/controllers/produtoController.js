const Produtos = require('../models/produtoModel');


exports.criarProduto = async (req, res) => {
    try {
        const produto = await Produtos.create(req.body);
        await produto.save();
        res.status(201).send(produto);
    } catch (error) {
        res.status(400).send(error);
    }
}