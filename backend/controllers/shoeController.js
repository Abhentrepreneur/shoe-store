const Shoe = require('../models/Shoe');

exports.getShoes = async (req, res) => {
    const shoes = await Shoe.find();
    res.status(200).json(shoes);
};
