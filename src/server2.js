const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Connection to MongoDB */
const dbConfig = 'mongodb://127.0.0.1:27017'
const dbName = 'nodejs-mongodb'

mongoose.connect(`${dbConfig}/${dbName}`, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
//, (err) => err ? console.log("not connected"): console.log("connected"))

const port = 3001

app.listen(port, () => {
  console.log("Listening on port: ", port)
})