const path = require('path')
const Destination = require(path.join(__base, 'models/Destination'))// eslint-disable-line no-undef

module.exports = (req, res) => {
  const { id } = req.params
  Destination
    .findById(id)
    .populate('destinations')
    .then(destination => {
      console.log('server side')
      console.log(destination)
      res.status(200).json(destination)
    })
    .catch(err => res.status(500).json(err))
}

