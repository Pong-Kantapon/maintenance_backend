const sql = require('./db.connection.js')

const Errordatabase = function(errordatabase) {
    this.error_code = errordatabase.error_code
    this.error_desciption = errordatabase.error_desciption
}