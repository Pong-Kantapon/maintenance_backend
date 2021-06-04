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

Request.getRequestbyID = (service_id, result) => {
    sql.query(`SELECT * FROM tb_request WHERE service_id = "${service_id}"`, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        }
        else {
            result(null, res[0])
            return
        }
    })
}

Request.getHighRequest = (result) => {
    sql.query(`SELECT c.* , count(r.customer_id) as num_of_request FROM tb_request r, tb_customers c WHERE r.customer_id = c.customer_id GROUP BY r.customer_id ORDER BY num_of_request DESC LIMIT 1`, (err, res) => {
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


module.exports = Request