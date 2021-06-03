const controller = require('../controller/part.rq.controller')

module.exports = function (app) {
    app.post('/api/partrq/create', controller.create)
    //app.get('/api/partrq/getPartrqbyID/:partrq_id', controller.getPartrqbyID)
    //app.get('/api/partrq/getPartrqList', controller.getPartrqList)
}