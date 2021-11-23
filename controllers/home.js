const Item = require('../models/Item');
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  if (req.user === undefined) {
    console.log('Default home screen.');
    res.render('defaulthome', {
      title: 'Default Home',
    });
  } else {
    if (req.user.role === 'seller') {
      console.log('Seller home screen.');
      Item.find({ creatorEmail: req.user.email }, function (err, items) {
        console.log(items);
        res.render('sellerhome', {
          title: 'Seller Home',
          sellerItems: items,
        });
      });
    } else if (req.user.role == 'buyer') {
      console.log('Buyer home screen.');
      res.render('buyerhome', {
        title: 'Buyer Home',
      });
    }
  }
};
