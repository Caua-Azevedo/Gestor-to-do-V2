const queries = require('../queries/userQueries');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
  }

  try {
    const existingUser = await queries.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }

    const hash = await bcrypt.hash(password, 10);
    const id = uuidv4();

    await queries.createUser(id, name, email, hash);
    res.status(201).json({ message: 'Usuário criado com sucesso', id });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao registrar usuário', details: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  try {
    const user = await queries.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao realizar login', details: err.message });
  }
};
