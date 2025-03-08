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

exports.listarProdutos = async (req, res) => {
  try {
    const produto = await Produtos.find({});
    res.status(200).send(produto);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.atualizarProduto = async (req, res) => {
  try {
    const produto = await Produtos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!produto) {
      return res.status(404).send({ error: "Produto não encontrado" });
    }
    res.status(200).send(produto);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletarProduto = async (req, res) => {
    try {
        const produto = await Produtos.findByIdAndDelete(req.params.id);
        if (!produto) {
            return res.status(404).send({ error: 'Produto não encontrado' });
        }
        res.status(200).send({ message: 'Produto deletado com sucesso'});
    } catch (error) {
        res.status(500).send(error); 
    }
}