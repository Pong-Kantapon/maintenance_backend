const sql =require('./db.connection.js')

const Emergency = function (emergency){
    this.machine_id = emergency.machine_id
    this.staff_id = emergency.staff_id
    this.e_reason = emergency.e_reason
    this.e_date = emergency.e_date
}

Emergency.create = (emergency, result) => {
    console.log(emergency)
    sql.query(`INSERT INTO tb_emergency SET ?`, emergency, (err,res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            console.log("Created emergency : ", emergency)
            result(null, {...emergency})
            return
        }
    })   
}

Emergency.getEmergencyId = (emergency_id, result) => {
    sql.query(`SELECT * FROM tb_emergency WHERE emergency_id = "${emergency_id}"`, (err,res) => {
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

Emergency.update = (emergency, result) => {
    sql.query(`UPDATE tb_emergency SET ? WHERE emergency_id = "${emergency.emergency_id}"`, emergency, (err,res) => {
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
module.exports = Emergency