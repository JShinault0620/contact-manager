const express = require('express')
const app = express()
const config = require('./config.js')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(config.port, () => {
    console.log(`Server listening at ${config.port}`)
})