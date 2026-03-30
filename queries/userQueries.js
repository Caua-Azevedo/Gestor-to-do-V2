const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.createUser = async (id, name, email, password) => {
  await db.query(
    'INSERT INTO users (id, name, email, password_hash) VALUES (?, ?, ?, ?)',
    [id, name, email, password]
  );

  return { id, name, email };
};

exports.getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

exports.getUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

exports.updateUser = async (id, name, email) => {
  await db.query(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id]
  );
};

exports.deleteUser = async (id) => {
  await db.query('DELETE FROM users WHERE id = ?', [id]);
};

exports.getUserByEmail = async (email) => {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
};
