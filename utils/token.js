const jwt = require('jsonwebtoken')

const SECRET = 'segredo'

function gerarToken(user) {
  return jwt.sign({ userId: user.id }, SECRET, {
    expiresIn: '1h'
  })
}

function verificarToken(token) {
  return jwt.verify(token, SECRET)
}

module.exports = { gerarToken, verificarToken, SECRET }