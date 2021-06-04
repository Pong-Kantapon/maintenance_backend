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

Emergency.getHighRepair = (result) => {
    sql.query(`SELECT e.machine_id, m.type_machine, count(e.machine_id) as num_of_repair FROM tb_machine m, tb_emergency e WHERE e.machine_id = m.machine_id GROUP BY e.machine_id ORDER BY num_of_repair DESC LIMIT 1`, (err, res) => {
    if(err) {
        console.log(err)
        result(err, null)
        return
    } else {
        result(null, res[0])
        return
    }

})

}


module.exports = Emergency