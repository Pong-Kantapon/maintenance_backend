const sql = require('./db.connection.js')
const $ = require('jquery')

const Customer = function(customer) {
    this.customer_id = customer.customer_id
    this.first_name = customer.first_name
    this.last_name = customer.last_name
    this.phone_number = customer.phone_number
}

Customer.create = (customer, result) => {
    console.log(customer)
    sql.query(`INSERT INTO Customer SET "${customer}"`, (err, res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            result(null, {...customer})
            return
        }
    })   
}

Customer.getCustomerbyID = (customer_id, result) => {
    sql.query(`SELECT * FROM Customer WHERE customer_id = "${customer_id}"`, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        } else {
            result(null, res)
            return
        }
    })
}

Customer.editCustomer = (customer, result) => {
    sql.query(`UPDATE Customer SET ? WHERE customer_id = "${customer.customer_id}"`,customer, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        }else {
            result(null, res)
            return
        }
    })
}

module.exports = Customer