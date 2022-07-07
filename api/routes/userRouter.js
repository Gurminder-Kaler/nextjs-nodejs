const app = require("express");
const router = app.Router();

const userController = require('@controllers/userController');

router.post('/getAllUsers',  userController.getAllUsers);

module.exports = router;