const Item = require('../models/Item');
const got = require('got');

/**
 * POST /
 * New item.
 */
exports.newItem = async (req, res) => {
  let description = req.body.description;
  if (description === '') {
    console.log('No description entered. Generating random.');
    console.log('Here');
    const response = await got('https://api.namefake.com/american/random', {
      responseType: 'json',
    });
    description = response.body.company;
  }
  const item = new Item({
    creatorEmail: req.user.email,
    title: req.body.title,
    body: description,
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
    console.log(
      'Removing item with title ' +
        data.title +
        ', sold by ' +
        data.creatorEmail +
        '.'
    );
  });
  res.redirect('/');
};

/**
 * GET /
 * Search for items.
 */
exports.findItems = (req, res) => {
  let queryObject = req.query;
  //this simplifies the query key value pair. I don't want, say, "search":"dogs and cats". I just want "dogs and cats"
  let query = queryObject.search;
  console.log(
    'Searching for items with the parameter ' +
      query +
      ' in their title or description.'
  );
  Item.find({}, { _id: 0, __v: 0 }, function (err, matchingItems) {
    let result = matchingItems.filter(
      (item) =>
        item.title.includes(potentialQuery) ||
        item.body.includes(potentialQuery)
    );
    console.log('Result');
    res.send(result);
    console.log('Done');
  });
  res.redirect('/');
};
