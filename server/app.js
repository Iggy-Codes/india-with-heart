const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const marked = require('marked')

const routerApi = require('./routes/api')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', routerApi)
app.use('/admin', express.static(path.join(__dirname, '../client')))

module.exports = app

// app.set('view engine', 'pug')

// app.get('/trips', (req, res) => {
//   // console.log(trips)
//   const Trip = require('./models/Trip')
//   const Destination = require('./models/Destination')

//   Trip.find({}, function (err, trips) {
//     if (err) throw err
//     Destination.populate(trips, {path: 'destinations'}, function (err, libros) {
//       if (err) throw (err)
//       // console.log(trips)
//       // trips = trips.map((element) => {
//       //   element.title = marked(element.title)
//       //   element.description = marked(element.description)
//       //   return element
//       // })
//       res.render('trips', {atrips: trips, marked, layout: false})
//       // res.json({trips})
//     })
//   })
//     .catch(err => { throw err })
// })

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

// app.get('/trip/:trip', (req, res, next) => {
//   // res.render('detail-trip', deluxeTrip)
//   // res.redirect('/trip/:trip/0')
//   let trip = req.params.day
//   res.redirect('/trip/' + trip + '/_')
//   next()
// })

// app.get('/trip/:tripUri/:city', (req, res) => {
//   // const trip = req.params.trip
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
//   let { tripUri, city } = req.params
//   const Trip = require('./models/Trip')
//   const Destination = require('./models/Destination')

//   Trip.find({titleUri: {$eq: tripUri}}, function (err, trips) {
//     if (err) throw (err)
//     Destination.populate(trips, {path: 'destinations'}, function (err, destinations) {
//       if (err) throw (err)
//       if (trips.length !== 1) res.redirect('/trips')
//       else {
//         // console.log('length result ' + trips.length)
//         const tripToRender = trips[0]
//         // console.log(city)
//         tripToRender['tripCity'] = city
//         tripToRender['photos'] = photos
//         tripToRender['marked'] = marked
//         tripToRender['layout'] = false
//         // console.log(tripToRender.tripCity)
//         res.render('detail-trip', tripToRender)
//         // res.json(tripToRender)
//       }
//     })
//   })

//   // deluxeTrip.tripCity = req.params.day
//   // res.render('detail-trip', deluxeTrip)
// })

// app.get('/trip', (req, res) => {
//
//   res.render('trip', { urlMaps, photos })
// })

// app.get('/', (req, res) => {
//   res.render('index')
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
