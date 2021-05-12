const sql = require('./db.connection.js')
const $ = require('jquery')

const Customer = function(customer) {
    this.customer_id = customer.customer_id
    this.first_name = customer.first_name
    this.last_name = customer.last_name
    this.phone_number = customer.phone_number
    this.credit_card = customer.credit_card
}

Customer.create = (customer, result) => {
    console.log(customer)
    sql.query('INSERT INTO Customer SET ?', customer, (err, result) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
    result(null, {...customer})
    })   
}

Customer.getCustomerbyID = (customer_id, result) => {
    sql.query(`SELECT * FROM Customer WHERE customer_id = "${customer_id}"`, (err,result) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        } else {
            result(null, result[0])
            return
        }
    })
}

Customer.update = (customer, result) => {
    sql.query(`UPDATE Customer SET ? WHERE customer_id = "${customer.customer_id}"`, customer, (err,result) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        }else {
            result(null, result)
            return
        }
    })
}
module.exports = Customer