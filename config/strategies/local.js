'use strict';

import jwt from 'passport-jwt';

let JwtStrategy = jwt.Strategy;
let ExtractJwt = jwt.ExtractJwt;
import User from '../../models/user';
import config from '../';

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        // let userResult = user.toJSON();
        done(null, user/*Result*/);
      } else {
        done(null, false);
      }
    });
  }));
};