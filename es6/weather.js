var http = require('http')
var fs   = require('fs')

var getWeather = (callback) => {

  var tampaWeather = 'http://api.openweathermap.org/data/2.5/weather?q=Tampa,FL&units=imperial'

  return http.get(tampaWeather, (response) => {

    var body = ''

    response.on('data', (chunk) => {
      body+= chunk
    })

    response.on('end', () => {
      if(response.statusCode === 200) {
        console.log('Retrieving weather information')
        callback = body
        fs.writeFile('data.json', callback, (err) => {
          if(err) throw err
          console.log('Saved')
        })
        console.log('Information retrieved and saved to data.json')
      } else {
        console.log('There was an error retrieving the information')
      }
    })
  })
}
