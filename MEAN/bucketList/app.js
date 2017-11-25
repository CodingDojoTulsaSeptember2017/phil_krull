const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const PORT = 8888;

const app = express();

app.use(express.static(path.join(__dirname, 'public/dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'mySuperSecretKey'}));

require('./server/config/mongoose');
require('./server/config/routes')(app);



app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})