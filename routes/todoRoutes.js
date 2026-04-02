const express = require('express');
const controller = require('../controllers/TodoController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.use(auth);

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;