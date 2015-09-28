'use strict';

var http = require('http');
var fs = require('fs');

var getWeather = function getWeather(callback) {

  var tampaWeather = 'http://api.openweathermap.org/data/2.5/weather?q=Tampa,FL&units=imperial';

  return http.get(tampaWeather, function (response) {

    var body = '';

    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function () {
      if (response.statusCode === 200) {
        console.log('Retrieving weather information.');
        callback = body;
        fs.writeFile('data.json', callback, function (err) {
          if (err) throw err;
          console.log('Saved');
        });
        console.log('Information retrieved and saved in data.json');
      } else {
        console.log('There was an error retrieving the information');
      }
    });
  });
};

module.exports.getWeather = getWeather();