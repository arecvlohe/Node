var server  = require('./_server');
var weather = require('./_weather');
var reader  = require('./_reader');

server.start(weather.getWeather, reader.readFile);
