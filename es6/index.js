let server  = require('./server')
let weather = require('./weather')

server.start(weather.getWeather)
