var express = require('express');
var router = express.Router();
var util = require('../scraper.js');

router.get('/', function(req, res, next) {
  res.send('hello');
});

router.get('/data', function(req, res, next) {
  util.callbackHell();
});

module.exports = router;
