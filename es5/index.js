'use strict';

var server = require('./server');
var weather = require('./weather');

server.start(weather.getWeather);