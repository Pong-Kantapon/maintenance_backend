const sql = require('./db.connection.js')
const $ = require('jquery')

const Machine = function(machine) {
    this.machine_id = machine.machine_id
    this.set_id = machine.set_id
    this.type_machine = machine.type_machine
}

Machine.create = (machine, result) => {
    console.log(machine)
    sql.query(`INSERT INTO Maintenancelog SET "${machine}"`, (err, res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            result(null, {...machine})
            return
        }
    })   
}

module.exports = Machine