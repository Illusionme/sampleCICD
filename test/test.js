var request = require('supertest')
var app = require('../index.js')

describe('GET /', function() {
    it('respond with <h1>Hello world</h1>', function(done) {
        request(app).get('/').expect('<h1>Hello world</h1>', done)
    })
})