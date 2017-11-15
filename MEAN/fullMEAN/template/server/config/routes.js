// ======================== change to match controller name ========================
const users = require('./../controllers/users');

module.exports = (app)=>{
  app.get('/users', users.index);
  app.get('/users/new', users.new);
  app.post('/users', users.create);
  app.get('/users/:id', users.show);
  app.get('/users/:id/edit', users.edit);
  app.post('/users/:id', users.update);
  app.post('/users/:id/delete', users.delete);
}
