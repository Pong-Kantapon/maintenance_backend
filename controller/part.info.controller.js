const Partinfo = require('../model/part.info.js')

exports.create =(req, res) => {
    Partinfo.create(req.body, (err, results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })
}