var http = require('http');
var data = require('./data');
var temp = data.main.temp.toFixed(1);
var tempDisplay = '{\r' + '\040\040\040' + 'currentTemperature: ' + temp +'\n}';

function start(getWeather) {
  function onRequest(request, response) {
    response.writeHeader(200, {'Content-Type':'application/json'});
    response.end(tempDisplay, 'utf-8');
  }

  http.createServer(onRequest).listen(5000);
  console.log('Server started');
}

module.exports.start = start;
