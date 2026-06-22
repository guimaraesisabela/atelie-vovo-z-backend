require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/clientes', require('./routes/clientes'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB conectado!');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
    });
  })
  .catch(err => console.error('Erro ao conectar MongoDB:', err));
