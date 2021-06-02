const sql =require('./db.connection.js')
const $ = require('jquery')

const Emergency = function (emergency){
    this.emergency_id = emergency.emergency_id
    this.machine_id = emergency.machine_id
    this.staff_id = emergency.staff_id
    this.e_reasons = emergency.e_reasons
    this.e_date = emergency.e_date
}