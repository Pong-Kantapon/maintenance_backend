const sql = require('./db.connection.js')

const Payment = function(payment) {
    this.customer_id = payment.customer_id
    this.credit_card_number = payment.credit_card_number
    this.credit_card_type = payment.credit_card_type
    this.credit_card_exp = payment.credit_card_exp
}

Payment.create = (payment, result) => {
    sql.query(`INSERT INTO tb_payment_infomation SET ?`, payment, (err, res) =>
    {
        if (err) {
            console.log("error : ",err)
            result(err,null)
            return
        }else{
            console.log("Created payment infomation : ", payment)  
            result(null, {...payment})
            return
        }
    })
  
}

module.exports = Payment
