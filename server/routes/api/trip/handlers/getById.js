const Trip = require('../../../../models/Trip')

module.exports = (req, res) => {
  const { id } = req.params
  Trip
    .findById(id)
    .populate('destinations')
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json(err))
}

