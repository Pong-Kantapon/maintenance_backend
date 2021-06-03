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