const sql = require('./db.connection.js')

const Maintenancelog = function(maintenancelog) {
    this.maintenance_date = maintenancelog.maintenance_date
    this.machine_id = maintenancelog.machine_id
    this.description = maintenancelog.description
    this.staff_id = maintenancelog.staff_id
}

Maintenancelog.create = (maintenancelog, result) =>{
    console.log(maintenancelog)
    sql.query(`INSERT INTO tb_maintenance_log SET ?`, maintenancelog, (err, res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            console.log("Created maintenance log : ", maintenancelog)
            result(null, {...maintenancelog})
            return
        }
    })   
}

Maintenancelog.getCount = (result) => {
    sql.query("SELECT COUNT(*) AS count FROM tb_maintenance_log;", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res) {
        result(null, res[0].count);
        return;
      }
    });
  };

module.exports = Maintenancelog