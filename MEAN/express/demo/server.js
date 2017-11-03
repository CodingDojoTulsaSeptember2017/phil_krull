const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8888

app.use(express.static(path.join(__dirname, './static')));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // console.log(req);
    res.render('index')
})


const server = app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`)
})

const io = require('socket.io').listen(server);

let counter = 0;

io.sockets.on('connection', function(socket){
    console.log(`Client/socket is connected`);
    console.log(`Client/socket id is: ${socket.id}`);

    socket.on('button_pressed', function(){
        counter += 1;
        socket.emit('server_response', {response: `request #${counter}`});
    })

})
