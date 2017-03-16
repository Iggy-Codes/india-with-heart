const Trip = require('../../../../models/Trip')

module.exports = (req, res) => {
  Trip.find()
    .then(tasks => res.json(tasks))
    // .then(tasks => res.json({tasks}))
    .catch(err => { throw err })
}
