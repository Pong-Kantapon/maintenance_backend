const Maintenancelog = require('../model/maintenancelog.js')
const Errordatabase = require('../model/errordatabase.js')

exports.create =(req, res) => {

    var maintenancelog = new Maintenancelog ("")
    maintenancelog.maintenance_date = req.body.maintenance_date
    maintenancelog.machine_id = req.body.machine_id
    maintenancelog.description = req.body.description
    maintenancelog.staff_id = req.body.staff_id
    Maintenancelog.create(maintenancelog, (err) => {
        if(err){
             return res.send(err)
        }
        else {
            Maintenancelog.getCount((err, count) => {
            if (err) return res.status(500).send({ message: err.message });
           else {
           var errordatabase = new Errordatabase("")
           errordatabase.error_description = req.body.error_description
           errordatabase.maintenance_id = count
           Errordatabase.create(errordatabase, (err, results) => {
                if (err) {
                return res.status(500).send({ message: err.message })
                }
                else {
                res.json(results)
                }
            })
            }
         })
        }
    })  
}