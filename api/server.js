
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
    textfield: {
      defaultValue: 'The default value from the API',
      size: 'large'
    },
    textarea: {
      defaultValue: 'The default value from the API'
    },
    dropdown: {
      values: ['jack', 'bill', 'henry', 'conan', 'duke', 'wayne'],
      labels: ['Jack', 'Bill', 'Henry', 'Conan', 'Duke', 'Wayne']
    },
    radiobox: {
      values: ['1', '2', '3', '4', '5', '6'],
      labels: ['Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5', 'Info 6']    
    },
    checkbox: {
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ]
    }
  }
};


api.get('/configuration', function(req, res) {
  console.log('GET From SERVER');
  res.send(ingredients);
});

app.listen(4000);