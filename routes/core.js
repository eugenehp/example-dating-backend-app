'use strict';

import core from '../controllers/core';

module.exports = function(app, passport) {
  app.get('/batch',   passport.authenticate('jwt', { session: false }), core.batch);
  app.get('/like',    passport.authenticate('jwt', { session: false }), core.like);
  app.get('/reject',  passport.authenticate('jwt', { session: false }), core.reject);
}