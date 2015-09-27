var server  = require('./server');
var weather = require('./weather');
var data    = require('./data');

server.start(weather.getWeather, data);
