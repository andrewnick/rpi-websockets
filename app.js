var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	socket.broadcast.emit('hi');
  	 io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

// app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
// });

http.listen(3000, function(){
  console.log('listening on *:3000');
});
