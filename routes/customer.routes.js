const controller = require('../controller/customer.controller')

module.exports = function (app) {
    //app.post('/api/customer/editCustomer', controller.editCustomer)
    app.post('/api/customer/create', controller.create)
    //app.get('/api/customer/getCustomerbyID/:customer_id', controller.getCustomerbyID)
    /*app.get('/api/customer/getCustomerList', controller.getCustomerList)*/
}