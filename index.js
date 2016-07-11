import express      from 'express';
import path         from 'path';
import bodyParser   from 'body-parser';
import passport     from 'passport';
import jwt          from 'jsonwebtoken';
import mongoose     from 'mongoose';
import helmet       from 'helmet';
import init         from './config/init';

init();
var config = require('./config');

var db = mongoose.connect(config.db);

config.getGlobbedFiles('./models/**/*.js').forEach(function(modelPath) {
  require(path.resolve(modelPath));
});

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.disable('x-powered-by');
app.use('/', express.static(path.resolve(__dirname, 'public')));

app.use(passport.initialize());
require('./config/strategies/local')(passport);

config.getGlobbedFiles('./routes/**/*.js').forEach(function(routePath) {
  require( path.resolve(routePath) )(app, passport);
});

app.listen(config.port, () => console.log('App started listening on port',config.port) );