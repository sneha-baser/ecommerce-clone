const express= require('express');
const router = express.Router();
const Product = require('../modules/products');
const { adminMiddleware, requiresignin } = require('../middleware');
const { createproduct } = require('../controller/products');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })
router.post('/product/create',requiresignin,adminMiddleware,upload.array('productpicture'),createproduct);
// router.get('/category/getcategory',getcategory);

module.exports = router;