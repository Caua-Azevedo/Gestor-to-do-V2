const todoQueries = require('../queries/todoQueries');

exports.create = async (req, res) => {
  const { title, completed } = req.body;
  const todo = await todoQueries.createTodo(title, completed, req.user.id);
  res.status(201).json(todo);
};

exports.getAll = async (req, res) => {
  const todos = await todoQueries.getAllTodos(req.user.id);
  res.json(todos);
};

exports.getById = async (req, res) => {
  const todo = await todoQueries.getTodoById(req.params.id);
  if (!todo) return res.status(404).json({ error: 'Todo não encontrado' });
  res.json(todo);
};

exports.update = async (req, res) => {
  const { title, completed } = req.body;
  await todoQueries.updateTodo(req.params.id, title, completed);
  res.json({ message: 'Todo atualizado' });
};

exports.delete = async (req, res) => {
  await todoQueries.deleteTodo(req.params.id);
  res.json({ message: 'Todo removido' });
};