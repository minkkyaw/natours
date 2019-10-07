const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  quantity: Number,
  price: Number
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
