const path = require('path')
const Trip = require(path.join(__base, 'models/Trip'))// eslint-disable-line no-undef

module.exports = (req, res) => {
  Trip.findByIdAndRemove(req.params.id)
    .then(trip => {
      console.log(`trip has been removed succesfully`)
      res.status(200).json(trip)
    })
    .catch(err => res.status(500).json(err))
}
