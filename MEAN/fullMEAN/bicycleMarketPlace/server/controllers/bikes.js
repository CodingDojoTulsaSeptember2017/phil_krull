const mongoose = require('mongoose');
const Bike = mongoose.model('Bike');
const User = mongoose.model('User');

module.exports = {
  index: (req,res)=>{
    Bike.find({})
    .populate('_user')
    .exec((err, bikes)=>{
      console.log(bikes);
      res.json(bikes);
    })
  },
  create: (req, res)=>{
    console.log(req.session.user_id);
    User.findOne({_id: req.session.user_id}, (err, user)=>{
      const bike = new Bike(req.body);
      bike._user = user._id;
      user.postings.push(bike);
      bike.save((err)=>{
        user.save((err)=>{
          if(err){
            res.send(err);
          } else {
            res.json(bike);
          }
        })
      })
    })
  }
}
