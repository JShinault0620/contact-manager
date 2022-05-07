const express = require('express')
const app = express()
const config = require('./config.js')

app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>')
})

app.listen(config.port)