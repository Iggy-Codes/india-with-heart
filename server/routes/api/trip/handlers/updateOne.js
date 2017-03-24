const path = require('path')
const Trip = require(path.join(__base, 'models/Trip'))// eslint-disable-line no-undef

module.exports = (req, res) => {
  const { id, title, titleUri, description, destinations } = req.body
  const trip = {
    title,
    titleUri,
    description,
    destinations
  }

  Trip
    .findByIdAndUpdate(id, trip)
    .then(response => {
      console.log('trip has been updated succesfully')
      res.status(200).json(trip)
    })
    .catch(err => res.status(500).json(err))
}
