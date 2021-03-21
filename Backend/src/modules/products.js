const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name : {
        type: String ,
        required : true ,
        trim : true
    } ,
    slug : {
        type: String ,
        required : true ,
        unique : true
    }
    ,
   price : {
       type : Number ,
       required : true
   } , 
 description : {
       type : String ,
       required : true , 
       trim : true
   } ,
   offer : {
       type : Number
   } ,
   quantity : {
    type : Number

   } ,
   productPictures : [
       {img : {type :String}}
   ] ,
   reviews : [
       {
           userId :  {type : mongoose.Schema.Types.ObjectId,ref : 'User'} ,
           review : String
       }
   ] , 
   category : {type : mongoose.Schema.Types.ObjectId,ref : 'Category' , required : true} ,
   createdBy : {type : mongoose.Schema.Types.ObjectId,ref : 'user',required : true} ,
   updatedAt : Date  ,

},{timestamps:true});
module.exports = mongoose.model('product',productSchema);