const path = require('path')
const Destination = require(path.join(__base, 'models/Destination')) // eslint-disable-line no-undef

module.exports = (req, res) => {
  const { id, title, titleUri, description, destinations } = req.body
  const destination = {
    title,
    titleUri,
    description,
    destinations
  }

  console.log(destination)
  console.log(id)
  Destination
    .findByIdAndUpdate(id, destination)
    .then(response => {
      console.log('trip has been updated succesfully')
      res.status(200).json(destination)
    })
    .catch(err => res.status(500).json(err))
}
