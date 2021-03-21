const Cart = require('../modules/cart');
exports.addItemCart = (req,res)=>{
    Cart.findOne({user:req.user._id}).exec((error,cart)=>{
        if(error)
        return res.status(400).json({error});
        if(cart){
            const product = req.body.cartItems.product;
            console.log(product);

            const item = cart.cartItems.find(c=> c.product==product);

            
            console.log(item);
            if(item){
                Cart.findOneAndUpdate({"user":req.user._id,"cartItems.product":product},{
                    "$set":{
                        "cartItems.$":{
                            ...req.body.cartItems,
                            quantity:item.quantity+req.body.cartItems.quantity
                        }

                    }
                }).exec((error,cart)=>{
                    if(error)
                    return res.status(400).json({error});
                    if(cart){
                        return res.status(201).json({cart});
                    }

                })

            }
            else{
            Cart.findOneAndUpdate({user:req.user._id},{
                "$push" : {
                    "cartItems" : req.body.cartItems
                }
            }).exec((error,cart)=>{
                    if(error)
        return res.status(400).json({error});
        if(cart)
        return res.status(201).json({cart:cart});

                })
            }
        }
        else{
            const cart = new Cart({
                user:req.user._id ,
                cartItems : req.body.cartItems
            });
            cart.save((error,cart)=>{
                if(error){
                    return res.status(400).json({error});
                }
                if(cart){
                    return res.status(201).json({cart});
                }
            });

        }

    })
    
}