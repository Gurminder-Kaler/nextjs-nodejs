const app = require("express");
const router = app.Router();

const contactFormController = require('@controllers/contactFormController');

router.post('/contactFormSubmit',  contactFormController.contactFormSubmit);
router.post('/getAllContactForms',  contactFormController.getAllContactForms);

module.exports = router;