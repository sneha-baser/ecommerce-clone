const {check , validationResult} = require('express-validator');
exports.validatesignupRequest = [
    check('firstName').notEmpty().withMessage('firstname is required'),
    check('lastName').notEmpty().withMessage('lastName is required'),
    check('email').isEmail().withMessage('Valid Email is required'),
    check('password').isLength({min : 6}).withMessage('password must be atleast 6 character long')
];
exports.issignupRequestValidated = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.array().length>0){
        return res.status(400).json({
            error : errors.array()[0].msg
        });
    }
    next();
}