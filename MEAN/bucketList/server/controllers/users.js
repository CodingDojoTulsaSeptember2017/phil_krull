const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    index: (req, res)=>{
        User.find({}, (users, errors)=>{
            if(errors){
                res.send(errors);
            } else {
                res.json(users);
            }
        }) 
    },
    create: (req, res)=>{
        console.log('the user is: ', req.body);
        const user = new User(req.body);
        user.save((err)=>{
            if(err){
                res.send(err);
            } else {
                req.session.user_id = user._id;
                res.send(true);
            }
        })
    }, 
    logout: (req, res)=>{
        req.session.destroy();
        res.send(true);
    }
}