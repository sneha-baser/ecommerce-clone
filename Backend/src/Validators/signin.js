const {check , validationResult} = require('express-validator');
exports.validatesigninRequest = [
    check('email').isEmail().withMessage('Valid Email is required'),
    check('password').isLength({min : 6}).withMessage('password must be atleast 6 character long')
];
exports.issigninRequestValidated = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.array().length>0){
        return res.status(400).json({
            error: errors.array()[0].msg
        });
    }
    next();
}