const Product = require('../modules/products');
const shortid= require('shortid');
const { default: slugify } = require('slugify');
exports.createproduct = (req,res)=>{
    // res.status(201).json({file : req.files , body : req.body});
    const {
        name , price , description , quantity,  category 
    } = req.body ;
    let productPictures = [];
    if(req.files.length>0){
        productPictures = req.files.map(file =>{
            return {img : file.filename}
        });
    }
    const product = new Product({
        name : name ,
        slug : slugify(name) ,
        price ,
        description ,
        productPictures ,
        category ,
        quantity ,
        createdBy : req.user._id

    });
product.save((error,product)=>{
    if(error){
        res.status(400).json({error});

    }
    if(product){
        res.status(200).json({product});
    }
});
}