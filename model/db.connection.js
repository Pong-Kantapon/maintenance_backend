const mysqli = require('mysql')
const dbconfig = require('../config/database.js')
const fs = require('fs')

const con = mysql.createConnection({
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    port: dbconfig.port,
    database: dbconfig.database,
    dialect: dbconfig.dialect
})

con.connect(function(err){
    if(err) throw err
    console.log('Connected! to the' + dbconfig.database + 'database.')
  })
module.exports = con