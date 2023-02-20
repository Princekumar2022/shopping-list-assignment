const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        enum: ['USD', 'INR'],
        default: 'USD',
    },
});

module.exports = mongoose.model('ShoppingList', shoppingListSchema);
