const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const validate = require('express-validator')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to Maintenance api')
})

require('./routes/branch.routes')(app)
require('./routes/customer.routes')(app)
require('./routes/emergency.routes')(app)
require('./routes/employee.routes')(app)
require('./routes/errordatabase.routes')(app)
require('./routes/feedback.routes')(app)
require('./routes/maintenancelog.routes')(app)
require('./routes/part.rq.routes')(app)
require('./routes/receipt.routes')(app)
require('./routes/request.routes')(app)
require('./routes/part.info.routes')(app)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
