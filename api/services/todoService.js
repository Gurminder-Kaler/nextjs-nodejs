const messages = require("@constants/messages");
const Todo = require("@models/todoModel");
const isEmpty = require("@validations/is-empty");
const saveTodoValidator = require("@validations/todoValidator/saveTodoValidator");
const mongoose = require('mongoose');

//saveTodo
const saveTodoServiceFunc = async (req, res) => {
     const { errors, isValid } = saveTodoValidator(req.body);
      if (!isValid) {
        res.json({
          status: 400,
          success: false,
          message: errors,
        });
      }
    const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user_id,
        status: req.body.status
    });
    todo.save().then((todoResult) => {
        res.json({
            status: 200,
            success: true,
            message: messages.SUCCESS.TODO.SAVED,
            data: {
                title : todo.title,
                body : todo.body,
                status : todo.status
            },
        });
    });
}

const getAllTodosServiceFunc = async (req, res) => {
    Todo.find()
    .exec()
    .then((docs) => {
      res.json({
        status: 200,
        count: docs.length,
        list: docs.map((doc) => {
          return {
            _id: doc && doc._id,
            title: doc && doc.title,
            body: doc && doc.body,
            createdAt: doc && doc.createdAt,
            updatedAt: doc && doc.updatedAt,
            deletedAt: doc && doc.deletedAt,
          };
        }),
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
}

module.exports = {
    saveTodoServiceFunc,
    getAllTodosServiceFunc
};
