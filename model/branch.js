const sql = require('./db.connection.js')

const Branch = function(branch) {
    this.branch_name = branch.branch_name
    this.branch_phone = branch.branch_phone
    this.branch_address = branch.branch_address
}

Branch.create = (newBranch, result) =>{
    sql.query(`INSERT INTO tb_branch SET ?`, newBranch, (err, res) =>{
        if (err) {
            console.log("error : ", err)
            result(err, null)
            return
        }
        else{
            console.log("Created branch : ", newBranch)
            result(null, {...newBranch})
            return
        }
    })
}

Branch.getBranchList = (branch, result) => {
    sql.query(`SELECT (*) FROM tb_branch `,(err, res) => {
            if(err) {
                console.log("error: ", err)
                result(err, null)
                return
            }
            else{
                result(null, res)
                return
        }
    })
}

Branch.getBranchbyID = (branch_id, result) => {
    sql.query(`SELECT * FROM tb_branch WHERE branch_id = "${branch_id}"`, (err,res) => {
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

Branch.editBranch = (branch, branch_id, result) => {
    sql.query(`UPDATE tb_branch SET ? WHERE branch_id = "${branch_id}"`, branch, (err,res) => {
        if(err) {
            console.log(err)
            result(err, null)
            return
        } 
        else{
            result(null, res)
            return
        }
    })
}

module.exports = Branch

