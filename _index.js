var server  = require('./_server');
var weather = require('./_weather');

server.start(weather.getWeather);
