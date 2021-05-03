const express = require('express')
const app = express()
const port = 3000
const router_api = require('./api')
const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    port: 3306,
    database: 'maintenance_app'    
})

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