const User = require('../modules/user');
// const authenticate = require('../modules/user');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();
exports.signup = (req,res)=>{
    User.findOne({email : req.body.email}).exec((error,user)=>{
        if(user){
            return res.status(400).json({
                message : 'Admin already registered'
            });
        }
        const {
            firstName ,
            lastName ,
            email ,
            password 
        } = req.body;
        const userr = new User({
            firstName ,
            lastName ,
            userName : Math.random().toString() ,
            email ,  
            password ,
            role : 'admin'
          
        });
userr.save((error , data)=>{
            if(error){
                return res.status(400).json({
                    message : error
                })
            }
            if(data){
                return res.status(201).json({
                    message:'admin signup succesfully'
                })
            }

        });


    });
}
exports.signin = (req,res)=>{
    User.findOne({email:req.body.email}).exec((error,user)=>{
        if(error){
            return res.status(400).json(error);
        }
        if(user){
            if(user.authenticate(req.body.password) && user.role==='admin'){
                const token = jwt.sign({_id : user._id,role: user.role},process.env.JWT_SECRET,{expiresIn:'1h'});
                const{_id,firstName,lastName,email,role,fullName} = user;
                res.status(200).json({
                    token ,
                    user :{
                        _id,firstName,lastName,email,role,fullName
                    }
                });

            }
            else{
                res.status(400).json({
                    message:'Invalid password'
                });
            }

        }
        else{
            return res.status(400).json({'message': "something went wrong" });
        }
    })
}
exports.requiresignin = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    const user  = jwt.verify(token,process.env.JWT_SECRET);
    req.user = user;
    console.log(token);
    next();
    // jwt.decode()
}
