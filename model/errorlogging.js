const sql = require('./db.connection.js')

const Errorlogging = function(errorlogging) {
    this.maintenance_id = errorlogging.maintenance_id
    this.error_code = errorlogging.error_code
}