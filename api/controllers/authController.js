


const {
    loginServiceFunc,
    registerServiceFunc,
    getUserViaEmailServiceFunc
} = require('@services/authService');

exports.login = async (req, res) => {
    // console.log('req login,,,,', req.body);
   try {
        return await loginServiceFunc(req, res);
    } catch(err) {
        return res.json({
            status: 500,
            success: false,
            message: "err"
        });
    }
}

exports.getUserViaEmail = async (req, res) => {
    try {
        console.log('req register,,,,,1', req.body);
        return await getUserViaEmailServiceFunc(req, res);
    } catch(err) {
        console.log('req register,,,,,2', req.body);
        return res.json({
            status: 500,
            success: false,
            message: "err"
        });
    }
}

exports.register = async (req, res) => {
    try {
        console.log('req register,,,,,1', req.body);
        return await registerServiceFunc(req, res);
    } catch(err) {
        console.log('req register,,,,,2', req.body);
        return res.json({
            status: 500,
            success: false,
            message: "err"
        });
    }
}
