var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/ran$/; //random emote keyword 
      botRegex2 = /^\/randos$/;
  //checking if user message matchesany keyword 
  if(request.text && botRegex.test(request.text)) { 
    this.res.writeHead(200); //starts the header
    postMessage('1');
    this.res.end(); //closes the header 
  }else if(request.text && botRegex2.test(request.text)) 
  {
    this.res.writeHead(200); //starts the header
    postMessage('2');
    this.res.end(); //closes the header 
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(txt) {
  var botResponse, options, body, botReq;

  //botResponse = cool();
  botResponse = 'dun for sun';
  
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond; //listener
