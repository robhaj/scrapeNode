var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");
var util = require('../scraper.js');
var js = "javascript";

router.get('/', function(req, res, next) {
  res.send('hello');
});

router.get('/data', function(req, res, next) {
  util.callbackHell();
});

module.exports = router;
