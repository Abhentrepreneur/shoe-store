const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
    console.log('show addToCart', req.body)
    const { shoeId } = req.body;
    console.log(req.body);
    const userId = req.user.id;
    
    let cart = await Cart.findOne({ userId });
    if (!cart) {
        cart = new Cart({ userId, shoes: [shoeId] });
    } else {
        cart.shoes.push(shoeId);
    }
    
    await cart.save();
    res.status(201).json(cart);
};

exports.getCart = async (req, res) => {
    console.log(req);
    const userId = req.user.id;
    const cart = await Cart.findOne({ userId }).populate('shoes');
    res.status(200).json(cart);
};
