const express = require('express')
const { dbConnection } = require('./db');
var cors = require('cors')

const app = express()
const port = 5000

dbConnection()
app.get('/', (req, res) => {
  res.send('Hello backend is live!')
})

app.use(express.json())     // this is added so that we can use json file as a response 
app.use(cors())

app.use('/api/user',require('./routes/users')) 
// app.use('/api/user',require('./routes/register'))              

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})