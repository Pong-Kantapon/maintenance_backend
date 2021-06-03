const sql = require('./db.connection.js')

const Partinfo = function(partinfo) {
    this.part_id = partinfo.part_id
    this.part_type = partinfo.part_type
    this.part_size = partinfo.part_size
    this.part_des = partinfo.part_des
    this.machine_id = partinfo.machine_id
}

Partinfo.create = (partinfo, result) =>{
    sql.query(`INSERT INTO tb_part_info SET ?`, partinfo, (err,res) =>{
        if(err){
            console.error("error : ", err)
            result(err, null)
            return
        }
        else{
            console.log("Created part infomation : ", partinfo)
            result(null, {...partinfo})
            return
        }
    })
}

module.exports = Partinfo