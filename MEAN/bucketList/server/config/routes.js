const path = require('path');
const users = require('./../controllers/users');
const items = require('./../controllers/items');
const bucketLists = require('./../controllers/bucketLists');

module.exports = (app)=>{
    // routes for the user
    app.get('/users', users.index);
    app.post('/users', users.create);
    app.get('/logout', users.logout);

    // routes for items
    app.get('/items', items.index);
    app.post('/items', items.create);

    // routes for the bucketlist
    app.get('/bucketLists', bucketLists.index);
    app.get('/bucketList/:user_id', bucketLists.find_users);
    app.post('/bucketLists/:item_id', bucketLists.create);
    app.post('/bucketLists/:bucketList_id/update', bucketLists.update);

    // catch all
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}