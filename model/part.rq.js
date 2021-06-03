const sql = require('./db.connection.js')

const Partrq = function(partrq) {
    this.partrq_id = partrq.partrq_id
    this.part_id = partrq.part_id
    this.staff_id = partrq.staff_id
    this.part_reasons = partrq.part_reasons
}

Partrq.create = (partrq, result) => {
    sql.query(`INSERT INTO tb_part_rq SET ?`, partrq, (err, res) => {
        if(err){
            console.log("error", err)
            result(err, null)
            return
        }
        else{
            console.log("Created part request : ", partrq)
            result(null, {...partrq})
            return
        }
    })
} 

module.exports = Partrq
