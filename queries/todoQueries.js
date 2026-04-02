const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.createTodo = async (title, completed, userId) => {
  const id = uuidv4();

  await db.query(
    'INSERT INTO todos (id, title, completed, user_id) VALUES (?, ?, ?, ?)',
    [id, title, completed, userId]
  );

  return { id, title, completed };
};

exports.getAllTodos = async (userId) => {
  const [rows] = await db.query(
    'SELECT * FROM todos WHERE user_id = ?',
    [userId]
  );
  return rows;
};

exports.getTodoById = async (id) => {
  const [rows] = await db.query('SELECT * FROM todos WHERE id = ?', [id]);
  return rows[0];
};

exports.updateTodo = async (id, title, completed) => {
  await db.query(
    'UPDATE todos SET title = ?, completed = ? WHERE id = ?',
    [title, completed, id]
  );
};

exports.deleteTodo = async (id) => {
  await db.query('DELETE FROM todos WHERE id = ?', [id]);
};
