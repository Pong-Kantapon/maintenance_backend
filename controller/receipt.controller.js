const Receipt = require('../model/receipt.js')

exports.create =(req, res) => {
    Receipt.create(req.body, (err, results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })
}