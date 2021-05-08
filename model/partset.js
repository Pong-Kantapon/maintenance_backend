const sql = require('./db.connection.js')

const Partset = function(partset) {
    this.part_name = partset.part_name
    this.machine_id = partset.machine
}