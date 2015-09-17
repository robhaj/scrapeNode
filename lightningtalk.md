#Web Scraping 

###What is it?

- Computer software technique of **automatically** collecting and extracting information from websites. 

- **Any** content that can be viewed on a webpage can be scraped. *Period.*

- Before web based API’s became prominent we had web scraping.

###Think About It

- Site owners typically care more about maintaining their public-facing visitor site than about their structured data feeds.

- Most businesses don’t build a lot of defenses against automated access.

- With APIs, you often have to register to get a key and then send that key with every request. With simple HTTP requests, you’re basically anonymous besides IP address and cookies, which can be spoofed.

- Web scraping is universally available. You don’t have to wait for a site to open up an API or contact anyone at the organization. Just spend time browsing the site until you find the data you need and figure out some basic access patterns.


#Scraping with Node 
##(Express,Request,Cheerio)

**Cheerio** - [http://cheeriojs.github.io/cheerio/]([http://cheeriojs.github.io/cheerio/)

- Implementation of core jQuery specifically for the server 
- Helps us traverse the DOM and extract data 

##Require Dependencies
```javascript
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
```
##Make GET request
```javascript
app.get('/', function (req, res) {
// request to url and load html
});
```
##Start Server and Export Module
```javascript
app.listen('8081');
exports = module.exports = app;
```
##Request to a URL and load HTML
```javascript
request(url, function (err, res, html) {
    if (!err && res.statusCode == 200) {
      // pass DOM to cheerio
      var $ = cheerio.load(html);
	console.log(html);
  });
```

