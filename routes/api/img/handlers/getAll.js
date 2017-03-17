// const fs = require('fs')
const path = require('path')
var read = require('fs-readdir-recursive')

module.exports = (req, res) => {
  try {
    let { folder } = req.params
    folder = !folder ? 'trip' : folder
    const folderImg = path.join(__dirname, '../../../../public/img/' + folder)
    console.log(folderImg)
    const files = read(folderImg)
    // let jsonFiles = {'imgs': JSON.stringify(files)}
    res.status(200).json({files})
  } catch (err) {
    res.status(500).json(err)
  }
}
// .map((element) => ({element}))
