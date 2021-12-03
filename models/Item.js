const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    creatorEmail: String,
    title: String,
    body: String,
  },
  { timestamps: true }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
