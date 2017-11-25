const users = require('./../controllers/users');
const bikes = require('./../controllers/bikes');

module.exports = (app)=>{
  // routes for users
  app.get('/users', users.show);
  app.post('/users/create', users.create);
  app.post('/users/auth', users.auth)
  // routes for bikes
  app.get('/bikes', bikes.index);
  app.post('/bikes/create', bikes.create);
}
