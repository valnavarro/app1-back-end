// BASE SETUP
//                ======================================
var express       = require('express');
var app           = express();
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var config        = require('./config');

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function (req, res, next)
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, x-access-token, content-type, Authorization');
  //next();
  if ('OPTIONS' === req.method)
  {
    res.status(200).end();
  } else
  {
    next();
  }
});

// connect to our database
mongoose.connect( config.database );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error db:'));

var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// START THE SERVER
app.listen(config.port);
console.log('api app on port ' + config.port);