const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    stock: { type: Number, required: true },
    thumbnail: { type: String, required: true },
});

module.exports = mongoose.model('Shoe', shoeSchema);
