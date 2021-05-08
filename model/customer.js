const sql = require('./db.connection.js')

const Customer = function(customer) {
    this.customer_id = customer.customer_id
    this.first_name = customer.first_name
    this.last_name = customer.last_name
    this.phone_number = customer.phone_number
    this.credit_card = customer.credit_card
}