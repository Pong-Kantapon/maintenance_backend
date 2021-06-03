const sql = require('./db.connection.js')

const Machine = function(machine) {
    this.machine_id = machine.machine_id
    this.customer_id = machine.customer_id
    this.type_machine = machine.type_machine
}

Machine.create = (machine, result) => {
    console.log(machine)
    sql.query(`INSERT INTO tb_machine SET ?`, machine, (err, res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            console.log("Created machine : ", machine)
            result(null, {...machine})
            return
        }
    })   
}

module.exports = Machine