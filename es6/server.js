let http = require('http')

let start = (getWeather) => {
  let onRequest = (request, response) => {

    let data        = require('./data')
    let temp        = data.main.temp.toFixed(1)
    let tempDisplay = '{\r\tcurrentTemperature: ' + temp + '\n}'

    response.writeHeader(200, {'Content-Type':'application/json'})
    response.end(tempDisplay, 'utf-8')
  }

  http.createServer(onRequest).listen(5000)
  console.log('Server started')
}

module.exports.start = start
