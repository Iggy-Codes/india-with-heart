const path = require('path')
const Trip = require(path.join(__base, 'models/Trip')) // eslint-disable-line no-undef
const Destination = require(path.join(__base, 'models/Destination')) // eslint-disable-line no-undef
const marked = require('marked')

module.exports = (req, res) => {
  const photos = [
    { 'url': '/img/gallery/001.jpg', 'des': 'Photo number 1' },
    { 'url': '/img/gallery/002.jpg', 'des': 'Photo number 2' },
    { 'url': '/img/gallery/003.jpg', 'des': 'Photo number 3' },
    { 'url': '/img/gallery/004.jpg', 'des': 'Photo number 4' },
    { 'url': '/img/gallery/005.jpg', 'des': 'Photo number 5' },
    { 'url': '/img/gallery/006.jpg', 'des': 'Photo number 6' },
    { 'url': '/img/gallery/007.jpg', 'des': 'Photo number 7' }]
  let { tripUri, city } = req.params

  Trip.find({titleUri: {$eq: tripUri}}, function (err, trips) {
    if (err) throw (err)
    Destination.populate(trips, {path: 'destinations'}, function (err, destinations) {
      if (err) throw (err)
      if (trips.length !== 1) res.redirect('/trips')
      else {
        const tripToRender = trips[0]
        tripToRender['urlTrip'] = '/trip/' + tripUri + '/'
        tripToRender['maxCities'] = tripToRender.destinations.length - 1
        tripToRender['photos'] = photos
        tripToRender['tripCity'] = city
        tripToRender['marked'] = marked
        tripToRender['layout'] = false
        tripToRender['map'] = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.API_GOOGLE_MAPS + '&callback=initMap'
        res.render('detail-trip', tripToRender)
      }
    })
  })
}
