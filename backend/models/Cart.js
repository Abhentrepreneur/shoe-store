const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    shoes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shoe' }]
});

module.exports = mongoose.model('Cart', cartSchema);
