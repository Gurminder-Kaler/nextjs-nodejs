const app = require("express");
const router = app.Router();

const authController = require('@controllers/authController');

router.post('/login',  authController.login);
router.post('/register',  authController.register);
router.post('/getUserViaEmail',  authController.getUserViaEmail);

module.exports = router;