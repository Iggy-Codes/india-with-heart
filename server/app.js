const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const routerApi = require('./routes/api')
const routerRoot = require('./routes/root')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.set('views', (path.join(__dirname, 'views')))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', routerApi)
app.use('/admin', express.static(path.join(__dirname, '../client')))
app.use('/', routerRoot)

module.exports = app
