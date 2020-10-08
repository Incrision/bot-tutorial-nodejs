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
  } else if (request.text && name3.test(request.text)) {
    this.res.writeHead(200);
    postMessage(3);
    this.res.end();
  } else if (request.text && name4.test(request.text)) {
    this.res.writeHead(200);
    postMessage(4);
    this.res.end();
  } else if (request.text && name5.test(request.text)) {
    this.res.writeHead(200);
    postMessage(5);
    this.res.end();
  } else if (request.text && name6.test(request.text)) {
    this.res.writeHead(200);
    postMessage(6);
    this.res.end();
  } else if (request.text && name7.test(request.text)) {
    this.res.writeHead(200);
    postMessage(7);
    this.res.end();
  } else if (request.text && name8.test(request.text)) {
    this.res.writeHead(200);
    postMessage(8);
    this.res.end();
  } else if (request.text && name9.test(request.text)) {
    this.res.writeHead(200);
    postMessage(9);
    this.res.end();
  } else if (request.text && name10.test(request.text)) {
    this.res.writeHead(200);
    postMessage(10);
    this.res.end();
  } else if (request.text && name11.test(request.text)) {
    this.res.writeHead(200);
    postMessage(11);
    this.res.end();
  } else if (request.text && name12.test(request.text)) {
    this.res.writeHead(200);
    postMessage(12);
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
    botResponse = 'Terry: 7757425829';
  else if(num == 3)
    botResponse = 'Pendleton: 7025927322';
  else if(num == 4)
    botResponse = 'Phillips: 9704268767';
  else if(num == 5)
    botResponse = 'Jaeck: 7753035789';
  else if(num == 6)
    botResponse = 'Chavez: 7028852449';
  else if(num == 7)
    botResponse = 'Baughman: 7754345537';
  else if(num == 8)
    botResponse = 'Iverson: 7753158902';
  else if(num == 9)
    botResponse = 'Ramos: 7754344991';
  else if(num == 10)
    botResponse = 'Krysinksi: 7755153029';
  else if(num == 11)
    botResponse = 'Trivitt: 7752302891';
  else if(num == 12)
    botResponse = 'Merker: 7025266518';
  
  if(num < 90)
    botResponse += '\n\n*beep boop*';
    
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
