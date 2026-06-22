const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  whatsapp: { type: String },
  medidas: {
    busto: Number,
    cintura: Number,
    quadril: Number,
    comprimento: Number,
    ombro: Number,
    manga: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('Cliente', clienteSchema);
