const Destination = require('../../../models/Destination')

module.exports = (req, res) => {
  Destination.find()
    .then(tasks => res.json(tasks))
    // .then(tasks => res.json({tasks}))
    .catch(err => { throw err })
}
