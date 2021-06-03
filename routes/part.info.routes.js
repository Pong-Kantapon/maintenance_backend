const controller = require('../controller/part.info.controller')

module.exports = function (app) {
    app.post('/api/partinfo/create', controller.create)
    //app.get('/api/partinfo/getPartinfobyID/:part_id', controller.getPartinfobyID)
    //app.get('/api/partinfo/getPartinfoList', controller.getPartinfoList)
}