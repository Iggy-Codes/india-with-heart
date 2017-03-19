const Trip = require('../../../../models/Trip')

module.exports = (req, res) => {
  Trip.find()
    .populate('destinations')
    .then(trip => res.json(trip))
    .catch(err => { throw err })
}
