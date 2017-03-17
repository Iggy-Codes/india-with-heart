const Destination = require('../../../../models/Destination')
// const Task = require('../../../models/Task')

module.exports = (req, res) => {
  const { postDestination } = req.body
  console.log('jajaja')
  console.log(postDestination)
  const newDestination = new Destination(postDestination)

  newDestination.save()
    .then(task => {
      console.log('Destination has been created succesfully')
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json(err))
}
