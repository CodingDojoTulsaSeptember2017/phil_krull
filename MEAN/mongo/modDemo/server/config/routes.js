const users = require('./../controllers/users.js');


module.exports = function(app){
    app.get('/', users.index);  
    app.post('/users', users.create)
}