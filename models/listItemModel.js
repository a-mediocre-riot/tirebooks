// listItemModel.js

const mongoose = require('mongoose');

var listItemSchema = mongoose.Schema({
    part_number: String,
    description: String,
    manufacturer: String,
    vendors: [String],
    category: String,
    cost: Number,
    price: Number,
    quantity_on_hand : Number,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var listItem = mongoose.model('list_item', listItemSchema);

module.exports = listItem;