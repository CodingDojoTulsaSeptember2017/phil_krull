const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8888;

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.urlencoded({ extended: true }));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}!`);
})