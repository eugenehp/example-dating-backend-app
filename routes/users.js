'use strict';

import users from '../controllers/users';

module.exports = function(app) {
  app.post('/signup',    users.signup);
  app.post('/signin',    users.signin);
}