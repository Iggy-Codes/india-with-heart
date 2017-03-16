const Destination = require('../../../../models/Destination')
// const Task = require('../../../models/Task')

module.exports = (req, res) => {
  const newDestination = new Destination(req.body.postDestination)

  newDestination.save()
    .then(task => {
      console.log('Destination has been created succesfully')
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json(err))
}
