const { todos } = require('../database/data')
const generateId = require('../utils/generateId')

exports.createTodo = (req, res) => {
  const { title } = req.body

  if (!title) return res.status(400).json({ error: 'Título obrigatório' })

  const newTodo = {
    id: generateId(),
    title,
    userId: req.userId
  }

  todos.push(newTodo)

  return res.status(201).json(newTodo)
}

exports.getTodos = (req, res) => {
  const userTodos = todos.filter(t => t.userId === req.userId)
  return res.json(userTodos)
}

exports.updateTodo = (req, res) => {
  const { title } = req.body

  if (!title) return res.status(400).json({ error: 'Título obrigatório' })

  const todo = todos.find(
    t => t.id == req.params.id && t.userId === req.userId
  )

  if (!todo) return res.status(404).json({ error: 'Todo não encontrado' })

  todo.title = title

  return res.json(todo)
}

exports.deleteTodo = (req, res) => {
  const index = todos.findIndex(
    t => t.id == req.params.id && t.userId === req.userId
  )

  if (index === -1) return res.status(404).json({ error: 'Todo não encontrado' })

  todos.splice(index, 1)

  return res.status(204).send()
}