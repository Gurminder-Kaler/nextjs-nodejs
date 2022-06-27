const {
  subscribeToNewsletter,
  unsubscribeToNewsletter,
  getAllNewsletterEmails,
} = require("@services/newsletterService");

exports.subscribeToNewsletter = async (req, res) => {
  try {
    console.log("req newsletter controller,", req.body);
    return await subscribeToNewsletter(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.getAllNewsletterEmails = async (req, res) => {
//   console.log("req getAllNewsletterEmails,,,,", req.body);
  try {
    return await getAllNewsletterEmails(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.unsubscribeToNewsletter = async (req, res) => {
  console.log("req un subscribeToNewsletter,,,,", req.body);
  try {
    return await unsubscribeToNewsletter(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: "err",
    });
  }
};
