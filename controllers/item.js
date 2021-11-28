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
  res.redirect('/');
};
