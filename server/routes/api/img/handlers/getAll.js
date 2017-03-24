const path = require('path')
var read = require('fs-readdir-recursive')

module.exports = (req, res) => {
  try {
    let { folder } = req.params
    folder = !folder ? 'trip' : folder
    const folderImg = path.join(__base, 'public/img/' + folder)// eslint-disable-line no-undef
    const files = read(folderImg)
    res.status(200).json({files})
  } catch (err) {
    res.status(500).json(err)
  }
}
