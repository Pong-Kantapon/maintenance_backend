const controller = require('../controller/maintenancelog.controller')

module.exports = function (app) {
    app.post('/api/maintenancelog/create', controller.create)
    //app.get('/api/maintenancelog/getMaintenancelogbyID/:maintenance_id', controller.getMaintenancelogbyID)
    //app.get('/api/maintenancelog/getMaintenancelogList', controller.getMaintenancelogList)
}