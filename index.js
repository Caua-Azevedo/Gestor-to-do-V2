require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/todos', require('./routes/todoRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'API do Gestor To-Do v3 rodando com sucesso!' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Erro interno no servidor', details: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});