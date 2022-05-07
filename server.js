const express = require('express')
const app = express()
const config = require('./config.js')
const mysql = require('mysql')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>')
})

apt.get('/query', (req, res) => {
    let conn = mysql.createConnection({
        host: '10.0.0.175',
        user: 'piremote',
        password: 'drain',
        database: 'contact-manager'
    })
    conn.connect()
    conn.query('SELECT * FROM sample', (error, results, fields) => {
        if (error) {
            throw error
        } else {
            res.render('query', {res: results})
            conn.end()
            console.log('Connection dropped')
        }
    })
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(config.port, () => {
    console.log(`Server listening at ${config.port}`)
})