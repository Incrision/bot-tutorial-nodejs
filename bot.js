var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/Dye #$/; 
      botRegex2 = /^\/thanks$/;
      
      coinflip = /^\/flip coin$/;
  
  //checking if user message matchesany keyword 
  if(request.text && botRegex.test(request.text)) { 
    this.res.writeHead(200); //starts the header
    postMessage(1);
    this.res.end(); //closes the header 
  } else if(request.text && botRegex2.test(request.text)){
    this.res.writeHead(200); //starts the header
    postMessage(2);
    this.res.end(); //closes the header 
  } else if(request.text && coinflip.test(request.text)){
    this.res.writeHead(200); //starts the header
    //if((Math.floor(Math.random() * Math.floor(2)) == 0);
      //postMessage(66);
    //else
      postMessage(67);
    this.res.end(); //closes the header 
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(txt) {
  var botResponse, options, body, botReq;
  
  
  if (txt == 1)
    botResponse = 'Dye: 7024974714 \n\n*Beep Boop*';
  else if(txt == 2)
    botResponse = cool();
  else if(txt == 66)
    botResponse = 'heads';
  else if(txt == 67)
    botResponse = 'tails';
  else
     botResponse = 'fail';
  
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
