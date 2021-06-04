const Feedback = require('../model/feedback.js')

exports.create =(req, res) => {
    Feedback.create(req.body, (err, results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })
}

exports.getAvgScore =(req, res) => {
    Feedback.getAvgScore((err,results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })


}