const express = require('express')
const app = express()

const userRoutes = require('./routes/userRoutes')
const todoRoutes = require('./routes/todoRoutes')
const authRoutes = require('./routes/authRoutes')

app.use(express.json())

app.use('/users', userRoutes)
app.use('/todos', todoRoutes)
app.use('/auth', authRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})