var express = require('express');
var router = express.Router();
var todos = require('./../controller/todosController');

router.get('/', todos.getAllTodo);
router.get('/:todoId', todos.getTodoById);
router.post('/', todos.saveTodo);
router.put('/:todoId', todos.updateTodo);
router.delete('/:todoId', todos.deleteTodo);
//router.delete('/:todoId', todos.delById);

module.exports = router;