const path = require('path')
const Destination = require(path.join(__base, 'models/Destination'))// eslint-disable-line no-undef

module.exports = (req, res) => {
  const { postDestination } = req.body
  console.log(postDestination)
  const newDestination = new Destination(postDestination)

  newDestination.save()
        .then(task => {
          console.log('Destination has been created succesfully')
          res.status(200).json(task)
        })
        .catch(err => res.status(500).json(err))
}
