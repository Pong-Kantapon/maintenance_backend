const sql = require('./db.connection.js')
const $ = require('jquery')

const Partinfo = function(partinfo) {
    this.part_id = partinfo.part_id
    this.part_type = partinfo.part_type
    this.part_size = partinfo.part_size
    this.part_des = partinfo.part_des
    this.machine_id = partinfo.machine_id
}