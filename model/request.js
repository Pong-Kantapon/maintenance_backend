const sql = require('./db.connection.js')

const Request = function(request){
    this.service_id = request.service_id
    this.staff_is = request.staff_id
    this.customer_id = request.customer_id
    this.date_rq = request.date_rq
    this.plan = request.plan
}