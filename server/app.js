const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const routesApi = require('./routes/api')
const routesRoot = require('./routes/root')
const routesAuth = require('./routes/auth')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.set('views', (path.join(__dirname, 'views')))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', routesApi)
app.use('/admin', express.static(path.join(__dirname, '../client')))
app.use('/', routesRoot)
app.use('/auth', routesAuth)

module.exports = app
