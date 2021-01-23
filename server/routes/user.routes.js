const userCtl = require('../controllers/user.controller');

module.exports = app => {
  app.post('/api/user', userCtl.register);
  app.post('/api/user/login', userCtl.login);
  app.delete('/api/user/logout', userCtl.logout);
}

  // this route now has to be authenticated


