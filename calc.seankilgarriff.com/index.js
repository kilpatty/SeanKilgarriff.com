var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
_ = require('underscore')._;
var chatHistory = [];


app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){

  socket.emit('history', chatHistory);
  console.log(chatHistory.length);


  socket.on('calculation', function(msg){
      chatHistory.push(msg);
        if (_.size(chatHistory) > 10) {
					chatHistory.splice(0,1);
				}

    io.emit('calculation', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
