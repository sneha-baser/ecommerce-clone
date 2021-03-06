const jwt = require('jsonwebtoken');
exports.requiresignin = (req,res,next)=>{
    if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1];
    const user  = jwt.verify(token,process.env.JWT_SECRET);
    req.user = user;
    console.log(token);
    }
    else{
        res.send(400).json({"error":"invalid token"});
    }
    
    next();
    // jwt.decode()
}
exports.adminMiddleware = (req,res,next)=>{
    if(req.user.role!='admin')
    {
        return res.status(400).json({message:"Access Denied"});
    }
    next();
}
exports.userMiddleware = (req,res,next)=>{
    if(req.user.role!='user')
    {
        return res.status(400).json({message:"Access Denied"});
    }
    next();
}