const path = require('path')
const Destination = require(path.join(__base, 'models/Destination'))// eslint-disable-line no-undef

module.exports = (req, res) => {
  Destination
    .find()
    .sort({ name: 1 })
    .then(tasks => res.json(tasks))
    .catch(err => { throw err })
}
