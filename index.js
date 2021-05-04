const express = require('express')
const app = express()
const port = 3000
const router_api = require('./api')
const config = require('./config')
const mysql = require('mysql')
const con = mysql.createConnection(config)

app.use('/api', router_api)
app.use
app.get('/', (req, res) => {
  res.send('Welcome to maintenance api')
})
app.get('/user/:code?',(req,res) => 
{
  console.log(req.query);
  console.log(req.params);
  res.send("<h1>users</h1>" + req.params.code)
})
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

con.connect(function(err){
  if(err) throw err
  console.log('Connected!')
})

//Test server api with middleware
const compression = require('compression')
app.use(compression(
  {
      filter: (req,res) => (!req.headers['x-no-compression'] && compression.filter(req,res)) || false,
  }))

app.usearch(express.static('public'))

app.use((req, res, next) => {
  var header = { 'Access-Control-Allow-Origin': '*' }
  for (var i in req.headers) {
    if (i.toLowerCase().substr(0, 15) === 'access-control-') {
      header[i.replace(/-request-/g, '-allow-')] = req.headers[i]
    }
  }
  res.header(header)
  next()
})

app.use(bodyParser.json())
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'eec!secret',
//   store,
//   cookie: {
//     maxAge: 15 * 60 * 1000, // 15min
//     // secure: true,
//   },
//   rolling: true,
//   resave: true,
//   saveUninitialized: true,
// }))

app.use((req, res, next) => {       //middleware for set value req.db by use /lib/db.js file * don't have*
  req.db = require('./lib/db')
  next()
})

app.use((req, res, next) => {             
  req.$socket = socket
  next()
})

app.use('/api', require('./api'))   /*Call File from route API from api/index.js */

app.listen(config.port, () => {
  console.log('ready', config.port)
})

// setInterval(() => {
//   let num = ('' + Math.floor(Math.random() * 1000000)).padStart(6, '0')
//   console.log('lotto=', num)
//   socket.publish('lotto', num)
// }, 5000)
