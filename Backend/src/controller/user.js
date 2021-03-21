const User = require('../modules/user');
// const authenticate = require('../modules/user');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();
exports.signup = (req,res)=>{
    User.findOne({email : req.body.email}).exec((error,user)=>{
        if(user){
            return res.status(400).json({
                message : 'User already registered'
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
          
        });
userr.save((error , data)=>{
            if(error){
                return res.status(400).json({
                    message : error
                })
            }
            if(data){
                return res.status(201).json({
                    user : data
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
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id : user._id,role : user.role},process.env.JWT_SECRET,{expiresIn:'1h'});
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

