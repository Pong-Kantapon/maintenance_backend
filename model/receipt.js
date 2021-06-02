const sql = require('./db.connection.js')
const $ = require('jquery')

const Receipt = function(receipt){
    this.receipt_id = receipt.receipt_id
    this.receipt_number = receipt.receipt_number
    this.service_id = receipt.service_id
    this.receipt_date = receipt.receipt_date
}

Receipt.create = (receipt, result) => {
    sql.query('INSERT INTO Receipt SER ?', receipt, (err, res) => {
        if(err){
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            result(null, {...receipt})
            return
        }
    })
}