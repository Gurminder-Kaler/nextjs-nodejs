const app = require("express");
const router = app.Router();

const newsletterController = require('@controllers/newsletterController');

router.post('/subscribeToNewsletter',  newsletterController.subscribeToNewsletter);
router.post('/getAllNewsletterEmails',  newsletterController.getAllNewsletterEmails);
router.post('/unsubscribeToNewsletter',  newsletterController.unsubscribeToNewsletter);

module.exports = router;