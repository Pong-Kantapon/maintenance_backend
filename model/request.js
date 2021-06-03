const sql = require('./db.connection.js')

const Request = function(request){
    this.staff_id = request.staff_id
    this.customer_id = request.customer_id
    this.date_rq = request.date_rq
    this.plan = request.plan
}

Request.create = (request, result) => {
    console.log(request)
    sql.query(`INSERT INTO tb_request SET ?`, request, (err, res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            console.log("Created request : ", request)
            result(null, {...request})
            return
        }
    })   
}

module.exports = Request