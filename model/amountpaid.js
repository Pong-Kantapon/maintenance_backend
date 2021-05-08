const sql = require('./db.connection.js')

const AmountPaid = function(amountpaid) {
    this.paid_id = amountpaid.paid_id
    this.service_id = amountpaid.service_id
    this.amount_paid = amountpaid.amount_paid
}

AmountPaid.getAmountpaidList = (result) => {
    sql.query(
        `SELECT paid_id,amount_paid FROM AmountPaid`,
        (err, res) => {
            if(err) {
                console.log("error : ",err);
                result(err, null);
                return;
            }
            result(null, res);
        }
    );
};

module.exports = AmountPaid;
