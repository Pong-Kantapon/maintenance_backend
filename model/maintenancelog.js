const sql = require('./db.connection.js')

const maintenanceLog = function(maintenancelog) {
    this.maintenance_id = maintenancelog.maintenance_id
    this.maintenance_date = maintenancelog.maintenance_date
    this.machine_id = maintenancelog.machine_id
    this.description = maintenancelog.description
    this.staff_id = maintenancelog.staff_id
    this.error_found = maintenancelog.error_found
}