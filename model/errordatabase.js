const sql = require('./db.connection.js')

const Errordatabase = function(errordatabase) {
    this.error_id = errordatabase.error_code
    this.error_desciption = errordatabase.error_desciption
    this.maintenance_id = errordatabase.maintenance_id
}