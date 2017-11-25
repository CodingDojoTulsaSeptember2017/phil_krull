const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bucketlist', {useMongoClient: true});

// if you are going to use promises use this line
mongoose.Promise = global.Promise;

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach((file)=>{
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
})