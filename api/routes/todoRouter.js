const app = require("express");
const router = app.Router();

const todoController = require('@controllers/todoController');

router.post('/save',  todoController.save);
router.get('/getAllTodos',  todoController.getAllTodos);

module.exports = router;