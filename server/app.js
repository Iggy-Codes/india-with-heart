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

  // Trip
  //   .find()
  //   .populate('destinations')
  //   .exec(function (err, trips) {
  // // console.log('The creator is %s', story._creator.name);
  // // // prints "The creator is Aaron"
  // //   .then(trips => {
  // //     console.log({atrips: trips})
    // })
    // .then(tasks => res.json({tasks}))

// app.post('/destination', (req, res) => {

// })

// app.get('/trip', (req, res) => {
//
//   res.render('trip', { urlMaps, photos })
// })

// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

// const PORT = process.env.PORT || 3000

// const URLDB = process.env.URLDB || 'mongodb://localhost:27017/indiaHeart'
// mongoose.connect(URLDB)

// console.log('api: ' + process.env.API_GOOGLE_MAPS)

// var urlMaps = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.API_GOOGLE_MAPS + '&callback=initMap'

// console.log(urlMaps)

// var trips = require('./db/trips.json')
// var deluxeTrip = require('./db/deluxe-trip.json')
