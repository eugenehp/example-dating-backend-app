'use strict';

var glob = require('glob');

module.exports = function() {
    let environmentFiles = glob.sync('./env/' +  process.env.NODE_ENV + '.js');
    if (!environmentFiles.length) {
      process.env.NODE_ENV = 'development';
    }
};