const userQueries = require('../queries/userQueries');

exports.create = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userQueries.createUser(name, email, password);
  res.status(201).json(user);
};

exports.getAll = async (req, res) => {
  const users = await userQueries.getAllUsers();
  res.json(users);
};

exports.getById = async (req, res) => {
  const user = await userQueries.getUserById(req.params.id);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
  res.json(user);
};

exports.update = async (req, res) => {
  const { name, email } = req.body;
  await userQueries.updateUser(req.params.id, name, email);
  res.json({ message: 'Usuário atualizado' });
};

exports.delete = async (req, res) => {
  await userQueries.deleteUser(req.params.id);
  res.json({ message: 'Usuário removido' });
};