const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const router_api = require('./api')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to Maintenance api')
})

require('./routes/branch.routes')(app)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

