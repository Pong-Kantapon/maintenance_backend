var express = require('express')
var app = require('express')()
var port = process.env.PORT || 3306
var users = require('./users')
var mysql = require('mysql')
var con = mysql.createConnection({                          //create connection
  host: 'localhost',
  user: 'root',
  password: '',
  databases: 'maintenance_app'
})
                           
con.connect(function(err){                                  //Conect DB
  if(err) throw err;
  console.log("Connected")
})

app.get('/', function (req, res) {                          //first page
    res.json('Backend for the project data')
  })
  app.get('/user', function (req, res) {                    //show all id
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
  })
  

