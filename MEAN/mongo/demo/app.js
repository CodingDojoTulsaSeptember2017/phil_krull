const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', { useMongoClient: true });

const UserSchema = new mongoose.Schema({
    name: String,
    location: String
}, { timestamps: true });

// add UserSchema to the mongosse models
mongoose.model('User', UserSchema);


// create a model instance
const User = mongoose.model('User');

const app = express();
const PORT = 8888;

mongoose.Promise = global.Promise;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
    {
        name: 'Michael',
        location: 'San Jose'
    },
    {
        name: 'Donovan',
        location: 'Seattle'
    },
    {
        name: 'Mike',
        location: 'Chicago'
    },
]

app.get('/', function(req, res){
    console.log('this');
    User.find({}, (err, users)=>{
        if(err){
            console.log(err);
        } else {
            res.render('index', {users: users})
        }
    })
})
    
// ES6 arrow function
app.post('/users', (req, res)=>{
    console.log(this);
    console.log(req.body);
    const newUser = new User( req.body );

    newUser.save((error)=>{
        console.log('in error');
        if(error){
            res.redirect('/');
            console.log('recieved errors', error);
        } else {
            console.log('added user');
            res.redirect('/');
        }
    })

    console.log('*'.repeat(90));
    console.log(newUser);
    // users.push(req.body);
})


app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}!`);
})