//dependencies
var request = require("request");
var cheerio = require("cheerio");

function callbackHell() {

  //cache urls to scrape
  var mdnUrl = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
  var pyUrl = 'https://www.python.org/';
  var hNewsUrl = 'https://news.ycombinator.com';
  var redditUrl = 'https://www.reddit.com/r/Web_Development/';

  //assign booleans before checking string match
  var hackNewsJS = false;
  var redditJS = false;

  //hacker news scrape
  request(hNewsUrl, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var firstHnTitle = $(".title > a").first().text();
      if (firstHnTitle.match('javascript')){
        hackNewsJS = true;
        return hackNewsJS;
      }
    }
}); //end hNews scrape request

    //reddit scrape
    request(redditUrl, function(error, response, html){
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var firstRedditTitle = $(".title > a").first().text();
        if (firstRedditTitle.match('javascript')){
          redditJS = true;
          return redditJS;
        }
      } //if the word javascript is found in hnews or reddit then scrape mdn
      if (redditJS === true || hackNewsJS === true) {

        //mdn scrape
        request(mdnUrl, function(error, response, html){
          if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var mdnFun = $('#Join_the_JavaScript_community').text();
            console.log(mdnFun);
          }
        });
        //otherwise scrape python.org
      } else {
        //python.org scrape
        request(pyUrl, function(error, response, html) {
          if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var pyFun = $('#success-story-2 > blockquote > a').text();
            console.log(pyFun);
          }
        }); //end python.org scrape request
      } //end else conditional
    }); //end reddit scrape request

} //end callbackHell function

module.exports = {
  callbackHell:callbackHell
};
