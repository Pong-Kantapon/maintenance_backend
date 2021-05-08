const sql = require('./db.connection.js')

const Branch = function(branch) {
    this.branch_id = branch.branch_id
    this.branch_name = branch.branch_name
    this.branch_phone = branch.branch_phone
    this.branch_address = branch.branch_address
}

AmountPaid.getBranchList = (result) => {
    sql.query(
        `SELECT branch_id,branch_name FROM Branch`,
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

module.exports = Branch;

