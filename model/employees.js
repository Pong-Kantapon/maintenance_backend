const sql = require('./db.connection.js')

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
    console.log(newEmployese)
    sql.query('INSERT INTO Employee SET ?', newEmployee, (err, result) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
    result(null, {...NewEmploys})
    })   
}

Employee.update = (employee, result) => {
    sql.query('UPDATE Employee SET ')
}
