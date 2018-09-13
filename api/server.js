
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Router = require('router');
var api = Router();

app.use('/api/', api);

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = {
  data: {
    textField: {

    }
  }
};


api.get('/configuration', function(req, res) {
  console.log('GET From SERVER');
  res.send(ingredients);
});

app.listen(4000);