var express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

app.listen(process.env.PORT || 3001)

module.exports = app