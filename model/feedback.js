const sql = require('./db.connection.js')

const Feedback = function(feedback) {
    this.sevice_id = feedback.sevice_id
    this.r_score = feedback.r_score
    this.s_score = feedback.s_score
    this.all_score = feedback.all_score
    this.comment = feedback.comment
}

Feedback.create = (feedback, result) => {
    console.log(feedback)
    sql.query(`INSERT INTO tb_feedback SET ?`, feedback, (err,res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            console.log("Created feedback : ", feedback)
            result(null, {...feedback})
            return
        }
    })   
}

Feedback.getFeedbackID = (fb_id, result) => {
    sql.query(`SELECT * FROM tb_feedback WHERE fb_id = "${fb_id}"`, (err,res) => {
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

Feedback.update = (feedback, result) => {
    sql.query(`UPDATE tb_feedback SET ? WHERE fb_id = "${feedback.fb_id}"`, feedback, (err,res) => {
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
module.exports = Feedback