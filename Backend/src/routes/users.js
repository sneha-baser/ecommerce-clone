const express= require('express');
const router = express.Router();
const {signup , signin }  = require('../controller/user');
const { requiresignin } = require('../middleware');
const {validatesigninRequest , issigninRequestValidated} = require('../Validators/signin');
const {validatesignupRequest,issignupRequestValidated} = require('../Validators/signup');

router.post('/signup',validatesignupRequest,issignupRequestValidated,signup);
router.post('/signin',validatesigninRequest,issigninRequestValidated,signin);
router.post('/profile',requiresignin,(req,res)=>{
    res.status(200).json({
        message:'profile'
    });
});
module.exports = router;
