const mongoose = require('mongoose');
const BucketList = mongoose.model('BucketList');

module.exports = {
    index: (req, res)=>{
        BucketList.find({}, (bucketLists, errors)=>{
            if(errors){
                res.send(errors);
            } else {
                res.json(bucketLists);
            }
        }) 
    },
    update: (req, res)=>{
        console.log('bucketList id is: ', req.params);
        BucketList.findOne({_id: req.params.bucketList_id},(err, bucketList)=>{
            if(err){
                console.log('in error');
                res.send(err);
            } else {
                bucketList.completed = true;
                bucketList.save((err)=>{
                    if(err){
                        res.send(err);
                    } else {
                        res.send(true);
                    }
                })
            }
        })
    }, create: (req, res)=>{
        const bucketList = new BucketList({user: req.session.user_id, item: req.params.item_id});
        bucketList.save((err)=>{
            if(err){
                res.send(err);
            } else {
                res.send(bucketList);
            }
        })
    },
    find_users: (req, res) => {
        BucketList.find({user: req.params.user_id})
        .populate('user')
        .populate('item')
        // .exec((items, error) => {
        //     if(error){
        //         res.send(error);
        //     } else {

        //     }
        // })
        // .populate('items')
        .exec((errors, results) => {
            if(errors){
                res.send(errors);
            } else {
                res.send(results);
            }
        })
    }
}