


const {
    contactFormSubmitServiceFunc,
    getAllContactFormsServiceFunc
} = require('@services/contactFormService');

exports.contactFormSubmit = async (req, res) => {
    // console.log('req contactFormSubmit,,,,', req.body);
   try {
        return await contactFormSubmitServiceFunc(req, res);
    } catch(err) {
        return res.json({
            status: 500,
            success: false,
            message: "err"
        });
    }
} 
exports.getAllContactForms = async (req, res) => {
    // console.log('req getAllContactForms,,,,', req.body);
   try {
        return await getAllContactFormsServiceFunc(req, res);
    } catch(err) {
        return res.json({
            status: 500,
            success: false,
            message: "err"
        });
    }
} 