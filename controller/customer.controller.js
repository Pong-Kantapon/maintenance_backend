const Customer = require('../model/customer.js')
const Payment = require('../model/payment.info.js')

exports.create =(req, res) => {
    
        var customer = new Customer ("")
        customer.first_name = req.body.first_name
        customer.last_name = req.body.last_name
        customer.phone_number = req.body.phone_number
        Customer.create(customer, (err) => {
            if(err){
               return res.send(err)
            }
            else {
                Customer.getCount((err, count) => {
                    if (err) return res.status(500).send({ message: err.message });
                    else {
                      var payment = new Payment ("")
                      payment.customer_id = count
                      payment.credit_card_number = req.body.credit_card_number
                      payment.credit_card_type = req.body.credit_card_type
                      payment.credit_card_exp = req.body.credit_card_exp
                      Payment.create(payment, (err, results) => {
                        if (err) {
                            return res.status(500).send({ message: err.message })
                        }
                        else {
                         res.json(results)
                        }
                      })
                    }
                  })
            }
        })    
}
