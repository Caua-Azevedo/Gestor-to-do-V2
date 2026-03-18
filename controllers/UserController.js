const { users } = require('../database/data')
const generateId = require('../utils/generateId')
const bcrypt = require('bcrypt')

exports.createUser = async (req, res) => {
  const { email, senha } = req.body

  if (!email) return res.status(400).json({ error: 'Email obrigatório' })
  if (!email.includes('@')) return res.status(400).json({ error: 'Email inválido' })
  if (users.some(u => u.email === email)) return res.status(400).json({ error: 'Email já existe' })
  if (!senha || senha.length < 6) return res.status(400).json({ error: 'Senha fraca' })

  const hashedsenha = await bcrypt.hash(senha, 10)

  const newUser = {
    id: generateId(),
    email,
    senha: hashedsenha
  }

  users.push(newUser)

  const { senha: _, ...userSafe } = newUser
  return res.status(201).json(userSafe)
}

exports.getUsers = (req, res) => {
  const safeUsers = users.map(({ senha, ...u }) => u)
  return res.json(safeUsers)
}

exports.updateUser = async (req, res) => {
  const { id } = req.params
  const { email, senha } = req.body

  const user = users.find(u => u.id == id)

  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' })

  if (email) {
    if (!email.includes('@')) {
      return res.status(400).json({ error: 'Email inválido' })
    }
    user.email = email
  }

  if (senha) {
    if (senha.length < 6) {
      return res.status(400).json({ error: 'Senha fraca' })
    }
    user.senha = await bcrypt.hash(senha, 10)
  }

  const { senha: _, ...userSafe } = user
  return res.json(userSafe)
}

exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id)

  if (index === -1) return res.status(404).json({ error: 'Usuário não encontrado' })

  users.splice(index, 1)

  return res.status(204).send()
}