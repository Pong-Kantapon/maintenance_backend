const sql = require('./db.connection.js')

const Machine = function(machine) {
    this.set_id = machine.set_id
    this.type_machine = machine.type_machine
}