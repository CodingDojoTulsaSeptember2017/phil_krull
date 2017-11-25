const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  create: (req, res)=>{
    console.log(req.body);
    const user = new User(req.body);
    console.log(user);
    user.save((err)=>{
      if(err){
        res.send(err);
      } else {
        // add user to session
        console.log('create user id');
        req.session.user_id = user._id;
        console.log(req.session);
        res.json(user);
      }
    })
  },
  auth: (req, res)=>{
    console.log('-'.repeat(90));
    console.log(req.body);
    User.findOne({email: req.body.email}, (err, user)=>{
      console.log('user is:', user);
      if(user){
        if(user.password === req.body.password){
          console.log('*'.repeat(90));
          req.session.user_id = user._id;
          res.json(user);
        } else {
          console.log('/'.repeat(90));
          // console.log(err);
          res.send(false);
        }
      } else {
        console.log('='.repeat(90));
        console.log(user);
        console.log('='.repeat(90));
        res.send(false);
      }
    })
  },
  show: (req,res)=>{
    console.log(req.session.user_id);
    User.findOne({_id: req.session.user_id})
    .populate('postings')
    .exec((err, user)=>{
      console.log(err);
      res.json(user);
    })
  }
}
