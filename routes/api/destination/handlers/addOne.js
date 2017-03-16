const Destination = require('../../../../models/Destination')
// const Task = require('../../../models/Task')

module.exports = (req, res) => {
  // const { cityName, lat, lng, tourismTitle, tourismDes, tourismImg, npoTitle, npoDes, npoImg, heartTitle, heartMsg, heartImg } = req.body
  // const tourismVisible = (req.body.tourismCheck === 'on')
  // const npoVisible = (req.body.npoCheck === 'on')
  // const heartVisible = (req.body.heartCheck === 'on')

  // const blocks = []
  // blocks.push({ title: tourismTitle, description: tourismDes, image: tourismImg, visible: tourismVisible, section: 'tourism' })
  // blocks.push({ title: npoTitle, description: npoDes, image: npoImg, visible: npoVisible, section: 'npo' })
  // blocks.push({ title: heartTitle, description: heartMsg, image: heartImg, visible: heartVisible, section: 'heart' })

  // // Fotos are fake
  // const photos = []
  // console.log(req)
  // const { postDestination } = req.body
  // console.log('We are reciving')
  const newDestination = new Destination(req.body.postDestination)

  newDestination.save()
    .then(task => {
      console.log('Destination has been created succesfully')
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json(err))
}
