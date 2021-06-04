const sql = require('./db.connection.js')

const Customer = function(customer) {
    this.first_name = customer.first_name
    this.last_name = customer.last_name
    this.phone_number = customer.phone_number
}

Customer.create = (customer, result) => {
    console.log(customer)
    sql.query(`INSERT INTO tb_customers SET ?`, customer, (err, res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            console.log("Created customer : ", customer)
            result(null, {...customer})
            return
        }
    })   
}

Customer.getCustomerbyID = (customer_id, result) => {
    sql.query(`SELECT * FROM tb_customers WHERE customer_id = "${customer_id}"`, (err,res) => {
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
    sql.query(`UPDATE tb_customers SET ? WHERE customer_id = "${customer.customer_id}"`,customer, (err,res) => {
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

Customer.getCount = (result) => {
    sql.query("SELECT COUNT(*) AS count FROM tb_customers;", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res) {
        result(null, res[0].count);
        return; 
      }
    });
  };

module.exports = Customer