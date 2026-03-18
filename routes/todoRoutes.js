const express = require('express')
const router = express.Router()
const todoController = require('../controllers/TodoController')
const auth = require('../middlewares/auth')

router.post('/', auth, todoController.createTodo)
router.get('/', auth, todoController.getTodos)
router.put('/:id', auth, todoController.updateTodo)
router.delete('/:id', auth, todoController.deleteTodo)

module.exports = router