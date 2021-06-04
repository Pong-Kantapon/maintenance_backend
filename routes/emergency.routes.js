const controller = require('../controller/emergency.controller')

module.exports = function (app) {
    app.post('/api/emergency/create', controller.create)
    app.get('/api/emergency/getHighRepair', controller.getHighRepair)
    //app.get('/api/emergency/getEmergencyList', controller.getEmergencyList)
}