const path = require('path')
const Trip = require(path.join(__base, 'models/Trip')) // eslint-disable-line no-undef
const Destination = require(path.join(__base, 'models/Destination')) // eslint-disable-line no-undef
const marked = require('marked')

module.exports = (req, res) => {
  Trip.find({}, function (err, trips) {
    if (err) throw err
    Destination.populate(trips, {path: 'destinations'}, function (err, libros) {
      if (err) throw (err)
      res.render('trips', {atrips: trips, marked, layout: false})
    })
  })
    .catch(err => { throw err })
}
