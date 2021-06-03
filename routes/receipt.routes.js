const controller = require('../controller/receipt.controller')

module.exports = function (app) {
    app.post('/api/receipt/create', controller.create)
    //app.get('/api/receipt/getReceiptbyID/:receipt_id', controller.getReceiptbyID)
    //app.get('/api/receipt/getReceiptList', controller.getReceiptList)
}