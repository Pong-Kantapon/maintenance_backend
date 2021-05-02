const express = require('express')
const app = express()
const port = 3000
const router_api = require('./api')
var fs = require('fs')
var mysql = require('mysql')
var con = mysql.createConnection({                          //create connection
  host: 'localhost',
  user: 'root',
  password: '',
  databases: 'maintenance_app'
})
/*var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port
  console.log('Application Run At http://%s:%s' ,(host, port))
})    */    
/*con.connect(function(err){                                  //Conect DB
  if(err) throw err;
  console.log("Connected")
})*/
app.use('/api', route_api)
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
/*  app.get('/user', function (req, res) {                    //show all id
    res.json(users.findAll())
  })
  app.get('/user/:id', function (req, res) {                //show id 
    var id = req.params.id
    res.json(userds.findById(id))
  })
  app.post('/newuser', function (req, res) {                //get the user
    var json = req.body
    res.send('Add new ' + json.name + ' Completed!')
  })
  app.listen(port, function () {                            //port that run-on
    console.log('Starting node.js on port ' + port)
  })*/