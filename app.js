const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

console.log('api: ' + process.env.API_GOOGLE_MAPS)

var urlMaps = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.API_GOOGLE_MAPS + '&callback=initMap'
console.log(urlMaps)

var trips = require('./db/trips.json')
var deluxeTrip = require('./db/deluxe-trip.json')

app.get('/trips', (req, res) => {
  console.log(trips)
  res.render('trips', trips)
})

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
app.use((req, res) => {
  res.render('index')
})

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))
