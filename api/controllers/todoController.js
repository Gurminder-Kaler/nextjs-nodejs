const {
    saveTodoServiceFunc,
    getAllTodosServiceFunc
} = require('@services/todoService');

exports.save = async (req, res) => {
    console.log('req,,,,,,,,,,,,,,,,,,,,', req.body);
   try {
        return await saveTodoServiceFunc(req, res);
    } catch(err) {
        return res.json({
            status: 500,
            success: false,
            message: err
        });
    }
}
exports.getAllTodos = async (req, res) => {
    console.log('req,,,,,,,,,,,,,,,,,,,,', req.body);
   try {
        return await getAllTodosServiceFunc(req, res);
    } catch(err) {
        return res.json({
            status: 500,
            success: false,
            message: err
        });
    }
}
