const controller = require('../controller/errordatabase.controller')

module.exports = function (app) {
    //app.post('/api/errordatabase/editErrordatabase', controller.editErrordatabase)
    app.post('/api/errordatabase/create', controller.create)
    //app.get('/api/errordatabase/getErrordatabasebyID/:error_id', controller.getErrordatabasebyID)
    //app.get('/api/errordatabase/getErrordatabaseList', controller.getErrordatabaseList)
}