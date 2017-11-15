const users = require('./../controllers/users');

module.exports = (app)=>{
  app.get('/users', users.index);
  app.post('/users', users.create);
}
