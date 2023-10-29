var express = require('express');
var Dog = require('./Dog');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Dog', { title: 'Search Results' });
});

module.exports = router;
