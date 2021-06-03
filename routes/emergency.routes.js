const controller = require('../controller/emergency.controller')

module.exports = function (app) {
    app.post('/api/emergency/create', controller.create)
    //app.get('/api/emergency/getEmergencybyID/:emergency_id', controller.getEmergencybyID)
    //app.get('/api/emergency/getEmergencyList', controller.getEmergencyList)
}