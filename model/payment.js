const sql = require('./db.connection.js')

const Payment = function(payment){
    this.amount_paid = payment.amount_paid
    this.damage = payment.damage
}