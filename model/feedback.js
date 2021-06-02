const sql = require('./db.connection.js')
const $ = require('jquery')

const Feedback = function(feedback) {
    this.fb_id = feedback.fb_id
    this.sevice_id = feedback.sevice_id
    this.r_score = feedback.r_score
    this.s_score = feedback.s_score
    this.all_score = feedback.all_score
    this.comment = feedback.comment
}