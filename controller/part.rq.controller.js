const Partrq = require('../model/part.rq.js')

exports.create =(req, res) => {
    Partrq.create(req.body, (err, results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })
}