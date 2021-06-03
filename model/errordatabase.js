const sql = require('./db.connection.js')

const Errordatabase = function(errordatabase) {
    this.error_description = errordatabase.error_description
    this.maintenance_id = errordatabase.maintenance_id
}

Errordatabase.create = (errordatabase, result) => {
    sql.query(`INSERT INTO tb_errordatabase SET ?` , errordatabase, (err,res) => {
        if(err) {
            console.log("error : ", err)
            result(err, null)
            return
        }
        else {
            console.log("Created error database : ", errordatabase)
            result(null, {...errordatabase})
            return
        }
    })
}

Errordatabase.getErrordatabasebyID = (error_id, result) => {
    sql.query(`SELECT * FROM tb_errordatabase WHERE staff_id = "${error_id}"`, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        } else {
            result(null, res)
            return
        }
    })
}

Errordatabase.update = (errordatabase, result) => {
    sql.query(`UPDATE tb_errordatabase SET ? WHERE staff_id = "${errordatabase.error_id}"`, errordatabase, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        } else {
            result(null, res)
            return
        }
    })
}
module.exports = Errordatabase
