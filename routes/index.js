var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newindex', function(req, res, next) {
  res.render('newindex', { title: 'Express' });
});

module.exports = router;
