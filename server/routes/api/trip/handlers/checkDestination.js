const path = require('path')
const Trip = require(path.join(__base, 'models/Trip'))// eslint-disable-line no-undef

module.exports = (req, res) => {
  const {destination} = req.params
  Trip.find({'destinations': destination})
    .then(trips => {
      let result = (trips.length !== 0)
      res.json({result})
    })
    .catch(err => { throw err })
}
