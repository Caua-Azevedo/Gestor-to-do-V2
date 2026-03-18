const jwt = require('jsonwebtoken')
const { SECRET } = require('../utils/token')

function auth(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não enviado' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, SECRET)
    req.userId = decoded.userId
    next()
  } catch {
    return res.status(401).json({ error: 'Token inválido' })
  }
}

module.exports = auth