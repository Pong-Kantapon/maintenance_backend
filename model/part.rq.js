const sql = require('./db.connection.js')
const $ = require('jquery')

const Partrq = function(partrq) {
    this.partrq_id = partrq.partrq_id
    this.part_id = partrq.part_id
    this.staff_id = partrq.staff_id
    this.part_reasons = partrq.part_reasons
}