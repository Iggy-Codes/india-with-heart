const express = require('express')
const path = require('path')

const app = express()

const PORT = 3000 || process.argv[2]

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.get('/home', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))
