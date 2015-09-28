var chai       = require('chai');
var expect     = require('chai').expect;
var superagent = require('superagent');

var weather    = require('../_weather');
var start      = require('../_server');


describe('start()', function() {
  it('starts a server on localhost:5000', function() {
    superagent
      .get('http://localhost:5000')
      .end(function(res) {
        expect(res.status).to.equal(200);
        done()
      })
  })
})

describe('getWeather()', function() {
  it('creates the data.json file', function() {
    expect('data.json').to.exist;
  })
})
