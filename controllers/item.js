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

  let dummy_post = req.body.description;
    if( dummy_post == undefined){
        let req = new XMLHttpRequest();
        let url = new URL("https://random-words-api.vercel.app/word");
        req.open('GET', url);
        req.responseType = 'json';

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
