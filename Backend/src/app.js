const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
env.config();
const app = express();
app.use(express.json());
const adminRoutes= require('./routes/admin');
const userRoutes= require('./routes/users');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const carttRoutes = require('./routes/cart');

//mongodb connection
mongoose.connect('mongodb+srv://root:sneha@cluster0.8vitr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useFindAndModify : false ,
    useUnifiedTopology : true
    
}).then(()=>{
    console.log("Database Connected");
}).catch((e)=>{
    console.log(e);
});
// import user routes
app.use(cors());
app.use('/user',userRoutes);
app.use('/admin',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',carttRoutes);
console.log(path.join(__dirname,'uploads'));
app.use(express.static(path.join(__dirname,'uploads')));
app.post("/data",(req,res,next)=>{
    res.status(200).json ({
        message:req.body
    })
})

app.get("/",(req,res,next)=>{
    res.status(200).json({
        message:'Hello from server'
    })
})
app.listen(process.env.PORT , ()=>{
    console.log(`server is running on ${process.env.PORT}`);
})