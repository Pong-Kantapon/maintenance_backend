const Request = require('../model/request.js')
const Machine = require('../model/machine.js')

exports.create = (req, res) => {
    var request = new Request ("")
    var machine = new Machine ("")
    request.customer_id = req.body.customer_id
    request.date_rq = req.body.date_rq
    request.staff_id = req.body.staff_id
    request.plan = req.body.plan

    Request.create(request, (err, results) => {
        if(err){
            return res.status(500).send({ message: err.message })
        }
        else {
        res.json(results)
        for (let i = 0 ; i < req.body.type_machine.length ; i++) {
            machine.customer_id = req.body.customer_id
            machine.type_machine = req.body.type_machine[i]
            Machine.create(machine, (err) => {
                if(err){
                    return res.status(500).send({ message: err.message })
                }
            })
         }
        }
    })


  }