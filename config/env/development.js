'use strict';

module.exports = {
  db:       process.env.MONGODB_URI   || 'mongodb://localhost:27017/dating',
  port:     process.env.PORT          || 8888,
  secret:   'DATINGAPP',
  cloudinary: {
      CLOUDINARY_API_KEY:     process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET:  process.env.CLOUDINARY_API_SECRET,
      CLOUDINARY_CLOUD_NAME:  process.env.CLOUDINARY_CLOUD_NAME
  },
  newrelic:   process.env.NEW_RELIC_LICENSE_KEY,
  sendgrid: {
    username:   process.env.SENDGRID_USERNAME,
    password:   process.env.SENDGRID_PASSWORD
  }
};
