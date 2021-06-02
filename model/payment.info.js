const sql = require('./db.connection.js')
const $ = require('jquery')

const Payment = function(payment) {
    this.p_info_id = payment.p_info_id
    this.customer_id = payment.customer_id
    this.credit_card_number = payment.credit_card_number
    this.credit_card_type = payment.credit_card_type
    this.credit_card_exp = payment.credit_card_exp
}

Payment.create = (payment, result) => {
    sql.query(`INSERT INTO Payment SET ${payment}`, (err, res) =>
    {
        if (err) {
            console.log("error : ",err)
            result(err,null)
            return
        }else{
            console.log("Created payment : ", payment)  
            result(null, {...payment})
            return
        }
    })
  
}
