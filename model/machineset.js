const sql = require('./db.connection.js')

const machineSet = function(machineset) {
    this.set_id = machineset.set_id
    this.customer_id = machineset.customer_id
    this.machine_amount = machineset.machine_amount
}