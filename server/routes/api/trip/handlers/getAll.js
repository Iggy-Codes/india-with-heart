const path = require('path')
const Trip = require(path.join(__base, 'models/Trip'))// eslint-disable-line no-undef

module.exports = (req, res) => {
  Trip.find()
    .populate('destinations')
    .then(trip => res.json(trip))
    .catch(err => { throw err })
}
