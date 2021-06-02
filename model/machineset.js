const sql = require('./db.connection.js')
const $ = require('jquery')

const Machineset = function(machineset) {
    this.set_id = machineset.set_id
    this.customer_id = machineset.customer_id
    this.machine_amount = machineset.machine_amount
}

Machineset.create = (machineset, result) => {
    console.log(machineset)
    sql.query(`INSERT INTO Machineset SET "${machineset}"`, (err, res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            result(null, {...machineset})
            return
        }
    })   
}

module.exports = Machineset