var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/db-helper.js');

// attach services
var app = express();

// register location of static files
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

// default route
app.get('/', function(req, res) {
  res.sendFile('./index.html', {'root': '.'});
});

// serve list of maps from db
app.get('/getAllMaps', function(req, res) {
  db.getAllMaps(req, res);
});

// save map votes from client
app.post('/saveMaps', function(req, res) {
  db.saveAllVotes(req, res);
});

// wildcard for other routes
app.get('*', function(req, res) {
  res.status(404).send('Not Found');
});

// start the server
app.listen(8080);
console.log('Listening on port 8080');
