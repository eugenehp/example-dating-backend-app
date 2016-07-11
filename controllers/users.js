"use-strict";

import Promise from 'bluebird';
import mongoose from 'mongoose';

import async from 'async';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config';
import _ from 'lodash';
import tracer from 'tracer';
let logger = tracer.console();


Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);
Promise.promisifyAll(mongoose.Query.prototype);

function signup(req,res){
  if(!req.body.email || !req.body.password) {
    res.json({ success: false, message: 'Please enter email and password.' });
  } else {
    let userData = {
      email:      req.body.email,
      password:   req.body.password
    };

    if(req.body.age)    userData.age    = parseInt(req.body.age);
    if(req.body.height) userData.height = Number(req.body.height).toPrecision(3);
    if(req.body.sex)    userData.sex    = req.body.sex;
    if(req.body.loc)    userData.loc    = req.body.loc.split(',');

    var newUser = new User(userData);

    // Attempt to save the user
    newUser.save(function(err) {
      if (err) {
        console.log(err);
        return res.json({ success: false, message: 'That email address already exists.'});
      }
      res.json({ success: true, message: 'Successfully created new user.' });
    });
  }
}

function signin(req,res){
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          let userResult = user.toJSON();
          delete userResult.password;
          let token = jwt.sign(userResult, config.secret, {
            expiresIn: 10080 // in seconds
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
}

export default {
  signup,
  signin
}