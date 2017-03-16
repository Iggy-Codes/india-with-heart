const Trip = require('../../../../models/Trip')

module.exports = (req, res) => {
  const { id } = req.body

  Trip.findByIdAndRemove(id)
    .then(task => {
      console.log(`tasks has been removed succesfully`)
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json(err))
}
