var http = require('http')

let start = (getWeather) => {
  let onRequest = (request, response) => {

    var data        = require('./data')
    var temp        = data.main.temp.toFixed(1)
    var tempDisplay = '{\r\tcurrentTemperature: ' + temp + '\n}'

    response.writeHeader(200, {'Content-Type':'application/json'})
    response.end(tempDisplay, 'utf-8')
  }

  http.createServer(onRequest).listen(5000)
  console.log('Server started')
}

module.exports.start = start
