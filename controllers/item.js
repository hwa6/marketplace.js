const Item = require('../models/Item');
/**
 * POST /
 * New item.
 */
exports.newItem = (req, res) => {
  const item = new Item({
    creatorEmail: req.user.email,
    title: req.body.title,
    body: req.body.description,
  });
  item.save();
  res.redirect('/');
};
/**
 * DELETE /
 * Delete item.
 */
exports.deleteItem = (req, res) => {
  const key = req.body._id;
  console.log('Deleting Item with _id ' + key);
  Item.findByIdAndRemove(key, function onRemove(err, data) {
    console.log(data);
  });
  res.redirect('/');
};
