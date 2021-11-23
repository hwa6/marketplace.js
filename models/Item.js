const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    creatorEmail: string,
    tile: string,
    body: string,
    //image: { data: Buffer, contentType: String },
  },
  { timestamps: true }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
