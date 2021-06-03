const controller = require('../controller/feedback.controller')

module.exports = function (app) {
    app.post('/api/feedback/create', controller.create)
    //app.get('/api/feedback/getFeedbackbyID/:fb_id', controller.getFeedbackbyID)
    //app.get('/api/feedback/getFeedbackList', controller.getFeedbackList)
}