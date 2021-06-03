const Machine = require('../model/machine.js')

exports.create =(req, res) => {
    Machine.create(req.body, (err, results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })
}