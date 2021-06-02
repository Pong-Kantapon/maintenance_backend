const sql = require('./db.connection.js')
const $ = require('jquery')

const Position = function(position) {
    this.position_id = position.position_id
    this.position_name = position.position_name
    this.salary = position.salary
}