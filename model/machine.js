const sql = require('./db.connection.js')

const Machine = function(machine) {
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

Machine.getMachinebyID = (machine_id, result) => {
    sql.query(`SELECT * FROM tb_machine WHERE machine_id = "${machine_id}"`, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        }
        else {
            result(null, res[0])
            return
        }
    })
}

Machine.getHighType = (result) => {
    sql.query(`SELECT type_machine, count(type_machine) as num_of_machine FROM tb_machine GROUP BY type_machine ORDER BY num_of_machine DESC LIMIT 1`, (err, res) => {
    if(err) {
        console.log(err)
        result(err, null)
        return
    } else {
        result(null, res[0])
        return
    }

})

}

module.exports = Machine