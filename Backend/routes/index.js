var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('/ index route update')
  res.render('index', { title: 'Express Updated --' });
});

module.exports = router;
