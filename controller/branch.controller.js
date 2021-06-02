const Branch = require('../model/branch.js')

exports.create =(req, res) => {
    Branch.create(req.body, (err, results) => {
        if(err){
            res.send(err)
        }
        else {
            res.json(results)
        }
    })
}
/*exports.create = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Content can't be empty"
      })
    }
    var branch = new Branch("");
    branch.branch_name = req.body.branch_name;
    branch.branch_phone = req.body.branch_phone;
    branch.branch_address = req.body.branch_address;
    Branch.create(branch, (err, result) => {
        if (err) return res.status(500).send({ message: err.message });
        else return res.status(200).send({ branch_id: result.branch_id });
      });
}*/


exports.getBranchList = (req, res) =>{
    Branch.getBranchbyList(req.params.branch, (err, results) =>{ 
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

exports.getBranchbyID = (req, res) =>{
    Branch.getBranchbyID(req.params.branch_id, (err, results) =>{
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

exports.editBranch = (req, res) => {
    const branch = req.body
    const branch_id = req.params.branch_id
    Branch.editBranch(branch, branch_id, (err, results) =>{
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}
