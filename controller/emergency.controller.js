const Emergency = require('../model/emergency.js')

exports.create =(req, res) => {
    Emergency.create(req.body, (err, results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })
}