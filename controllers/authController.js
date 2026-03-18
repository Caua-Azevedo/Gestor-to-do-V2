const { users } = require('../database/data')
const bcrypt = require('bcrypt')
const { gerarToken } = require('../utils/token')

exports.login = async (req, res) => {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha obrigatórios' })
  }

  const user = users.find(u => u.email === email)

  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas' })
  }

  const valid = await bcrypt.compare(senha, user.senha)

  if (!valid) {
    return res.status(401).json({ error: 'Credenciais inválidas' })
  }

  const token = gerarToken(user)

  return res.json({ token })
}