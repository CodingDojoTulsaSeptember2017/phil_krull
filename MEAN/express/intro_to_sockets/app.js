const express = require('express');
const path = require('path');
const PORT = 8888;

const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

const server = app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`);
})

const io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here

    // listen for clients emits
    socket.on('button clicked', function(data){
        console.log(`emit was heard on the server, and the client said: ${data.reason}`);
        // emit (socket.emit) = send a response the to client that sent the request
        // broadcast (socket.broadcast) = send a response to everyone but the client that sent the request
        // fullbroad cast (io.emit) = send a response the client that sent the request
        io.emit('event from server', {reason: 'true'});
    })
  })