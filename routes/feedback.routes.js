const controller = require('../controller/feedback.controller')

module.exports = function (app) {
    app.post('/api/feedback/create', controller.create)
    app.get('/api/feedback/getAvgScore', controller.getAvgScore)
    //app.get('/api/feedback/getFeedbackList', controller.getFeedbackList)
}