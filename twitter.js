const Twit = require('twit');
const config = require('./config.js');
let schedule = require('node-schedule');
const request = require('request');

let T = new Twit(config);

// agradecimentos sempre que receber follow
let stream = T.stream('user');

stream.on('follow', followMessage)

function followMessage(eventMsg){
  let name = eventMsg.source.name;
  let screenName = eventMsg.source.screen_name;
  if (screenName !== 'bebofaland0'){
  tweetIt('.@' + screenName + ' obrigado por seguir o canal @bebofaland0!!');
  }
}

//funcao que emite um tweet
function tweetIt(txt){
  T.post('statuses/update', { status: txt }, function(err, data, response) {
  })
}

var j = schedule.scheduleJob({hour: 19, minute: 20}, function(){

  request('https://talaikis.com/api/quotes/random/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', JSON.parse(body).quote); // Print the HTML for the Google homepage.
    tweetIt('Auto post das 4:20: '+ JSON.parse(body).quote)
  });
  
});



