const sql = require('./db.connection.js')
const $ = require('jquery')

const Employee = function(employee) {
    this.position_name = employee.position_name
    this.branch_id = employee.branch_id
    this.id_card = employee.id_card
    this.first_name = employee.first_name
    this.last_name = employee.last_name
    this.gender = employee.gender
    this.address = employee.address
    this.phone = employee.phone
    this.email = employee.email
    this.user_id = employee.user_id
}

Employee.create = (employee, result) => {
    console.log(newEmployee)
    sql.query('INSERT INTO Employee SET ?', newEmployee, (err, result) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
    result(null, {...NewEmploys})
    })   
}

Employee.getEmployeebyID = (staff_id, result) => {
    sql.query(`SELECT * FROM Employee WHERE staff_id = "${staff_id}"`, (err,result) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        } else {
            result(null, result[0])
            return
        }
    })
}

Employee.update = (employee, result) => {
    sql.query(`UPDATE Employee SET ? WHERE staff_id = "${employee.staff_id}"`, employee, (err,result) => {
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, result)
        }
    })
}
module.exports = Employee