const sql = require('./db.connection.js')

const Position = function(position) {
    this.position_name = position.position_name
    this.salary = position.salary
}