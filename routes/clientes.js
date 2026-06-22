const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find().sort({ nome: 1 });
    res.json(clientes);
  } catch (e) {
    res.status(500).json({ erro: 'Erro ao buscar clientes' });
  }
});

router.post('/', async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);
  } catch (e) {
    res.status(400).json({ erro: 'Erro ao criar cliente' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cliente);
  } catch (e) {
    res.status(400).json({ erro: 'Erro ao atualizar cliente' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Cliente removido' });
  } catch (e) {
    res.status(400).json({ erro: 'Erro ao remover cliente' });
  }
});

module.exports = router;
