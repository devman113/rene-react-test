
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

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));

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

var dataset = {
  data: [
    'apple', 'banana', 'berry', 'coconut', 'grapes', 'lemons', 'mangoes', 'orange', 'pear', 'peach', 'strawberry', 'watermelon'
  ]
};


api.get('/configuration', function(req, res) {
  console.log('API call From SERVER');
  res.send(ingredients);
});

api.post('/dataset', function(req, res) {
  var search = req.body.search;
  const result = dataset.data.filter(single => single.includes(search));
  res.send(result);
});

app.listen(4000);