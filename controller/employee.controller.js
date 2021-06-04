const Employee = require('../model/employee.js')

exports.create =(req, res) => {
    
    Employee.create(req.body, (err, results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })
   
}

exports.editEmployee =(req, res) => {
    var employee = new Employee ("")
    employee.first_name = req.body.first_name
    employee.last_name = req.body.last_name
    employee.id_card = req.body.id_card
    employee.position_id = req.body.position_id
    employee.address = req.body.address
    employee.email = req.body.email
    employee.gender = req.body.gender
    employee.phone = req.body.phone
    employee.branch_id = req.body.branch_id
    
    Employee.editEmployee(employee, req.body.staff_id, (err, results) =>{
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

exports.getEmployeebyID = (req, res) =>{
    Employee.getEmployeebyID(req.params.staff_id, (err, results) =>{
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

exports.getHighEm =(req, res) => {
    Employee.getHighEm((err,results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })


}