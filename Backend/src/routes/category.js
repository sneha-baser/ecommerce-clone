const express= require('express');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
const Category = require('../modules/category');
const slugify = require('slugify');
const { addcategory, getcategory } = require('../controller/category');
const { adminMiddleware, requiresignin } = require('../middleware');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname),'uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })
router.post('/category/create',requiresignin,adminMiddleware,upload.single('categoryimg'),addcategory);
router.get('/category/getcategory',getcategory);

module.exports = router;