const controller = require('../controller/request.controller')

module.exports = function (app) {
    app.post('/api/request/create', controller.create)
    app.get('/api/request/getMachinebyID/:machine_id', controller.getMachinebyID)
    app.get('/api/request/getRequestbyID/:service_id', controller.getRequestbyID)
    app.get('/api/request/getHighRequest', controller.getHighRequest)
    app.get('/api/request/getHighType', controller.getHighType)
    //app.get('/api/request/getRequestList', controller.getRequestList)
}