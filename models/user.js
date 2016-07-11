"use strict";
import mongoose from 'mongoose';
import bcrypt  from 'bcrypt';


let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
    return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * A Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
    return (this.provider !== 'local' || (password && password.length > 6));
};


var user = new Schema({
    accessToken: {
        type: String
    },
    displayName: {
        type: String,
        trim: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        default: '',
        validate: [validateLocalStrategyProperty, 'Please fill in your email'],
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    comfirmedEmail: {
        type: Boolean,
        default: false
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        default: '',
        validate: [validateLocalStrategyPassword, 'Password should be longer']
    },
    dob: {
        type: Date,
    },
    age: {
        type: Number,
    },
    height: {
        type: Number,
    },
    loc: {
        type: [Number],  // [<longitude>, <latitude>]
        index: '2d'
    },
    sex: {
        type: String,
        enum: ['male', 'female']
    },
    religion: {
        type: String,
        enum: ['judaism', 'christianity', 'islam', 'hinduism', 'taoism', 'buddhism', 'sikhism', 'agnostic', 'atheist']
    },
    likes: {
        type: [String]
    },
    rejects: {
        type: [String]
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    }
});


user.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

user.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};


module.exports = mongoose.model('User', user);