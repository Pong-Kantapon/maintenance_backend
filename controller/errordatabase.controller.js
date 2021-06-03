const Errordatabase = require('../model/errordatabase.js')

exports.create =(req, res) => {
    Errordatabase.create(req.body, (err, results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })
}