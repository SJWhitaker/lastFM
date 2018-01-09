const express = require('express');
const app = express();
const request = require('request');

app.get('/', function(req, res) {
    request('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e3918ef5cd467ae4026dfed695a1317c&format=json', function (error, response, body) {
      if(!error && response.statusCode == 200 ) {
      	   let parseData = JSON.parse(body);
          res.send(parseData);
          console.log('response');
    }
  });
});

app.listen(3333, function() {
	console.log("You're on port 3333, have your say")
});