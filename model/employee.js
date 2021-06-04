const sql = require('./db.connection.js')

const Employee = function(employee) {
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
    sql.query(`INSERT INTO tb_employee SET ?`, employee, (err, res) => {
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
    sql.query(`SELECT * FROM tb_employee WHERE staff_id = "${staff_id}"`, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        } else {
            result(null, res[0])
            return
        }
    })
}

Employee.editEmployee = (employee, staff_id, result) => {
    sql.query(`UPDATE tb_employee SET ? WHERE staff_id = "${staff_id}"`, employee, (err,res) => {
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

Employee.getHighEm= (result) => {
    sql.query(`SELECT e.* , count(m.staff_id) as num_of_maintenance FROM tb_maintenance_log m, tb_employee e WHERE e.staff_id = m.staff_id GROUP BY m.staff_id ORDER BY num_of_maintenance DESC LIMIT 1`, (err, res) => {
    if(err) {
        console.log(err)
        result(err, null)
        return
    } else {
        result(null, res[0])
        return
    }

})

}
module.exports = Employee