const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const routerLocation = require('./routes/api/destination')
const routerTrip = require('./routes/api/trip')
const routerImg = require('./routes/api/img')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const PORT = process.env.PORT || 3000

const URLDB = process.env.URLDB || 'mongodb://localhost:27017/indiaHeart'
console.log(URLDB)
mongoose.connect(URLDB)

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', express.static(path.join(__dirname, 'client')))

app.set('view engine', 'pug')

app.use('/api/destination', routerLocation)
app.use('/api/trip', routerTrip)
app.use('/api/img', routerImg)

console.log('api: ' + process.env.API_GOOGLE_MAPS)

var urlMaps = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.API_GOOGLE_MAPS + '&callback=initMap'
console.log(urlMaps)

var trips = require('./db/trips.json')
var deluxeTrip = require('./db/deluxe-trip.json')

app.get('/trips', (req, res) => {
  console.log(trips)
  res.render('trips', trips)
})

// app.post('/destination', (req, res) => {

// })

app.get('/trip/:trip', (req, res, next) => {
  // res.render('detail-trip', deluxeTrip)
  // res.redirect('/trip/:trip/0')
  let trip = req.params.day
  res.redirect('/trip/' + trip + '/_')
  next()
})

app.get('/trip/:trip/:day', (req, res) => {
  // const trip = req.params.trip
  deluxeTrip.tripCity = req.params.day
  res.render('detail-trip', deluxeTrip)
})

// app.get('/trip', (req, res) => {
//   const photos = [
//     { 'url': '/img/gallery/001.jpg',
//       'des': 'Photo number 1' },
//     { 'url': '/img/gallery/002.jpg',
//       'des': 'Photo number 2' },
//     { 'url': '/img/gallery/003.jpg',
//       'des': 'Photo number 3' },
//     { 'url': '/img/gallery/004.jpg',
//       'des': 'Photo number 4' },
//     { 'url': '/img/gallery/005.jpg',
//       'des': 'Photo number 5' },
//     { 'url': '/img/gallery/006.jpg',
//       'des': 'Photo number 6' },
//     { 'url': '/img/gallery/007.jpg',
//       'des': 'Photo number 7' }
//   ]
//   res.render('trip', { urlMaps, photos })
// })

// app.get('/home', (req, res) => {

// app.use((req, res) => {
//   res.render('index')
// })

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))
