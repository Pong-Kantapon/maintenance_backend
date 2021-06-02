const sql = require('./db.connection.js')
const $ = require('jquery')

const Maintenancelog = function(maintenancelog) {
    this.maintenance_id = maintenancelog.maintenance_id
    this.maintenance_date = maintenancelog.maintenance_date
    this.machine_id = maintenancelog.machine_id
    this.description = maintenancelog.description
    this.staff_id = maintenancelog.staff_id
    this.error_found = maintenancelog.error_found
}

Maintenancelog.create = (maintenancelog, result) =>{
    console.log(maintenancelog)
    sql.query(`INSERT INTO Maintenancelog SET "${maintenancelog}"`, (err, res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            result(null, {...maintenancelog})
            return
        }
    })   
}

module.exports = Maintenancelog