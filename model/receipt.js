const sql = require('./db.connection.js')

const Receipt = function(receipt){
    this.receipt_number = receipt.receipt_number
    this.service_id = receipt.service_id
    this.receipt_date = receipt.receipt_date
}

Receipt.create = (receipt, result) => {
    sql.query('INSERT INTO tb_receipt SET ?', receipt, (err, res) => {
        if(err){
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            console.log("Created receipt : ", receipt)
            result(null, {...receipt})
            return
        }
    })
}

module.exports = Receipt