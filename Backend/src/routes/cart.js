const express= require('express');
const router = express.Router();
const Category = require('../modules/cart');
const slugify = require('slugify');
const { userMiddleware, requiresignin } = require('../middleware');
const { addItemCart } = require('../controller/cart');
router.post('/cart/add',requiresignin,userMiddleware,addItemCart);
// router.get('/category/getcategory',getcategory);

module.exports = router;