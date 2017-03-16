// const fs = require('fs')
const path = require('path')
var read = require('fs-readdir-recursive')

module.exports = (req, res) => {
  try {
    let folderImg = path.join(__dirname, '../../../../public/img/trip')
    let files = read(folderImg)
    res.status(200).json(files)
  } catch (err) {
    res.status(500).json(err)
  }
}
