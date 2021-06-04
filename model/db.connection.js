const mysql = require('mysql')
const dbconfig = require('../config/database.js')
const fs = require('fs')


const con = mysql.createConnection({
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    port: dbconfig.port,
    database: dbconfig.database,
    dialect: dbconfig.dialect,
    multipleStatements: dbconfig.multipleStatements
})

con.connect(function(err){
    if(err) throw err
    console.log('Connected! to the ' + dbconfig.database + ' database.')
    /*var tables = fs.readFileSync('./sql/tables.sql').toString()
    con.query(tables)
    var foreignKeys = fs.readFileSync('./sql/foreign_keys.sql').toString()
    con.query(foreignKeys)
    var position = fs.readFileSync('./sql/position.sql').toString()
    con.query(position)*/
  })

module.exports = con