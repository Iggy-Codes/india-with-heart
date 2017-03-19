const path = require('path')
const Trip = require(path.join(__base, 'models/Trip'))// eslint-disable-line no-undef

module.exports = (req, res) => {
  const { title, titleUri, description, destinations } = req.body

  const trip = new Trip({
    title,
    titleUri,
    description,
    destinations
  })

  trip.save()
    .then(task => {
      console.log('trip has been created succesfully')
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json(err))
}
