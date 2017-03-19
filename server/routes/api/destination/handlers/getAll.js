const path = require('path')
const Destination = require(path.join(__base, 'models/Destination'))// eslint-disable-line no-undef

module.exports = (req, res) => {
  Destination.find()
    .then(tasks => res.json(tasks))
    // .then(tasks => res.json({tasks}))
    .catch(err => { throw err })
}
