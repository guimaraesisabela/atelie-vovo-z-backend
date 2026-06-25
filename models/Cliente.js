const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  whatsapp: { type: String },
  observacoes: { type: String },
  medidas: {
    busto: Number,
    torax: Number,
    ombroAOmbro: Number,
    larguraCostas: Number,
    comprimentoOmbroBusto: Number,
    alturaBusto: Number,
    distanciaBustos: Number,
    comprimentoBlusa: Number,
    circunferenciaBraco: Number,
    manga: Number,
    cintura: Number,
    quadril: Number,
    comprimento: Number,
    ombro: Number,
    cinturaSaia: Number,
    ganchoDianteiro: Number,
    ganchoTraseiro: Number,
    coxa: Number,
    barraCalca: Number,
    comprimentoCalca: Number,
  }
}, { timestamps: true });

module.exports = mongoose.model('Cliente', clienteSchema);
