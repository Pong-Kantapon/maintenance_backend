const controller = require('../controller/employee.controller')
const validator = require('../middleware/validator')

module.exports = function (app) {
    app.post('/api/employee/editEmployee', controller.editEmployee)
    app.post('/api/employee/create', controller.create)
    app.get('/api/employee/getEmployeebyID/:staff_id', controller.getEmployeebyID)
    app.get('/api/employee/getHighEm', controller.getHighEm)
    /*app.get('/api/employee/getEmployeeList', controller.getEmployeeList)*/
}