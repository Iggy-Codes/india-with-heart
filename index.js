const fs = require('fs')
const path = require('path')

const thereIsDotEnv = fs.existsSync('.env')
if (thereIsDotEnv) require('dotenv').config()

global.__base = path.join(__dirname, '/server/')

const app = require('./server/app')
const db = require('./server/config/db')

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/indiaHeart'
const PORT = process.env.PORT || 3000

console.log(`connecting to ${DB_URI}...`)

db.open(DB_URI)
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
