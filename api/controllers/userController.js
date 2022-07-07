
const {
    getAllUsersServiceFunc, 
} = require('@services/userService');

exports.getAllUsers = async (req, res) => {
    console.log('req,,,,,,,,,,,,,,,,,,,,', req.body);
   try {
        return await getAllUsersServiceFunc(req, res);
    } catch(err) {
        return res.json({
            status: 500,
            success: false,
            message: err
        });
    }
}