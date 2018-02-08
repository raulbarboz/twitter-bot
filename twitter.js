const Twit = require('twit');
const config = require('./config.js');
let schedule = require('node-schedule');

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

var j = schedule.scheduleJob({hour: 21, minute: 20}, function(){
  console.log('Time for tea!');
});

var n = new Date();
console.log(n);