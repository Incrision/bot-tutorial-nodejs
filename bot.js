var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/thanks$/;
  name1 = /^\/Dye #$/;
  name2 = /^\/Terry #$/;
  name3 = /^\/Pendleton #$/;
  name4 = /^\/Phillips #$/;
  name5 = /^\/Jaeck #$/;
  name6 = /^\/Chavez #$/;
  name7 = /^\/Baughman #$/;
  name8 = /^\/Iverson #$/;
  name9 = /^\/Ramos #$/;
  name10 = /^\/Krysinksi #$/;
  name11 = /^\/Trivitt #$/;
  name12 = /^\/Merker #$/;
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(99);
    this.res.end();
  } else if (request.text && name1.test(request.text)) {
    this.res.writeHead(200);
    postMessage(1);
    this.res.end();
  } else if (request.text && name2.test(request.text)) {
    this.res.writeHead(200);
    postMessage(2);
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(num) {
  var botResponse, options, body, botReq;
  
  if(num == 99)
    botResponse = cool();
  else if(num == 1)
    botResponse = 'Dye: 7024974714';
  else if(num == 2)
    botResponse = 'Terry: 7024974714';
  
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


exports.respond = respond;
