const Category = require('../modules/category');
const slugify = require('slugify');
function createCategories(categories,parentId=null){
    const categoryList = [];
    let category;
    if(parentId==null){
        category = categories.filter(cat=> cat.parentId==undefined);
    }
    else{
        category = categories.filter(cat => cat.parentId==parentId);
    }
    for(let cate of category){
        categoryList.push({
            _id : cate._id,
            name : cate.name ,
            slug : cate.slug ,
            children : createCategories(categories,cate._id)
        });
    }
    return categoryList;
}

exports.addcategory=(req,res)=>{
    const categoryObj = {
        name : req.body.name,
        slug : slugify(req.body.name),
  
    }
    if(req.file){
        categoryObj.categoryImage='http://localhost:2000/public/'+req.file.filename;
    }
    if(req.body.parentId)
    categoryObj.parentId=req.body.parentId;

   
    const cat = new Category(categoryObj);
    cat.save((error,category)=>{
        if(error)
        {
            return res.status(400).send(error);
        }
        if(category){
            return res.status(201).json({cat});
        }
    
    });
}
exports.getcategory = (req,res)=>{
    Category.find({}).exec((error,categories)=>{
        if(error){
            return res.status(400).send(error);
        }
        if(categories){
            const categoryList = createCategories(categories);
            return res.status(201).json({categoryList});

        }
    });

}