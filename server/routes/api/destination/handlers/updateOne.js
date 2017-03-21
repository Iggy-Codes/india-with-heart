const path = require('path')
const Destination = require(path.join(__base, 'models/Destination')) // eslint-disable-line no-undef

module.exports = (req, res) => {
  const { id } = req.params
  const { postDestination } = req.body
  // const newDestination = new Destination(postDestination)
  console.log('before update')
  console.log(postDestination)
  console.log(id)
  Destination
    .findByIdAndUpdate(id, postDestination)
    .then(response => {
      console.log('trip has been updated succesfully')
      res.status(200).json(postDestination)
    })
    .catch(err => res.status(500).json(err, postDestination))
}
