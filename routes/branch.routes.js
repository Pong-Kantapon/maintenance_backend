const controller = require('../controller/branch.controller')

module.exports = function (app) {
    app.post('/api/branch/editBranch', controller.editBranch)
    app.post('/api/branch/create', controller.create)
    app.get('/api/branch/getBranchbyID/:branch_id', controller.getBranchbyID)
    app.get('/api/branch/getBranchList', controller.getBranchList)
}
