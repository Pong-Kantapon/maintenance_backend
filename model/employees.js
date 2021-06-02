const sql = require('./db.connection.js')
const $ = require('jquery')

const Employee = function(employee) {
    this.staff_id = employee.staff_id
    this.position_id = employee.position_id
    this.branch_id = employee.branch_id
    this.id_card = employee.id_card
    this.first_name = employee.first_name
    this.last_name = employee.last_name
    this.gender = employee.gender
    this.address = employee.address
    this.phone = employee.phone
    this.email = employee.email
}

Employee.create = (employee, result) => {
    console.log(employee)
    sql.query(`INSERT INTO Employee SET "${employee}"`, (err,res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            result(null, {...employee})
            return
        }
    })   
}

Employee.getEmployeebyID = (staff_id, result) => {
    sql.query(`SELECT * FROM Employee WHERE staff_id = "${staff_id}"`, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        } else {
            result(null, res)
            return
        }
    })
}

Employee.update = (employee, result) => {
    sql.query(`UPDATE Employee SET ? WHERE staff_id = "${employee.staff_id}"`, employee, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        } else {
            result(null, res)
            return
        }
    })
}
module.exports = Employee