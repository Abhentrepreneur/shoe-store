const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
    const { cartId } = req.body;
    const order = new Order({ cartId, userId: req.user.id });
    
    await order.save();
    res.status(201).json(order);
};
