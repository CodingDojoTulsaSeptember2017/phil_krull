const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const BucketList = mongoose.model('BucketList');

module.exports = {
    index: (req, res)=>{
        Item.find({})
        .populate('created_by')
        .exec((items, errors)=>{
            if(errors){
                res.send(errors);
            } else {
                res.json(items);
            }
        }) 
    },
    create: (req, res)=>{
        console.log('item is: ', req.body);
        const item = new Item(req.body);
        item.created_by = req.session.user_id;
        item.save((err)=>{
            if(err){
                res.send(err);
            } else {
                // create the bucketList also
                const bucketListCreator = new BucketList({user: req.session.user_id, item: item._id});
                bucketListCreator.save((err)=>{
                    if(err){
                        res.send(err);
                    } else {
                        // handles the user tagged someone else
                        if(req.session.user_id !== req.body.selected_user){
                            const bucketListAdded = new BucketList({item: item._id, user: req.body.selected_user});
                            // save bucketList
                            bucketListAdded.save((err)=>{
                                if(err){
                                    res.send(err);
                                } else {
                                    const response = {
                                        bucketListCreator: bucketListCreator,
                                        bucketListAdded: bucketListAdded,
                                        item: item
                                    }
                                    // may change the response, based on client display
                                    res.json(response);
                                }
                            })
                        } else {
                            // handles the user tagged themselves
                            const response = {
                                bucketListCreator: bucketListCreator,
                                item: item
                            }
                            res.json(response);
                        }
                    }
                })

            }
        })
    }
}