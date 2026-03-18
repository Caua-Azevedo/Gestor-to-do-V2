const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')
const auth = require('../middlewares/auth')

router.post('/', userController.createUser)
router.get('/', auth, userController.getUsers)
router.put('/:id', auth, userController.updateUser)
router.delete('/:id', auth, userController.deleteUser)

module.exports = router