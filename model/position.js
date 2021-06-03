const sql = require('./db.connection.js')

const Position = function(position) {
    this.position_id = position.position_id
    this.position_name = position.position_name
    this.salary = position.salary
}

Position.create = (position, result) => {
    console.log(position)
    sql.query(`INSERT INTO Position SET ?`, position, (err, res) => {
        if (err) {
            console.log('error : ', err)
            result(err, null)
            return
        }
        else{
            console.log("Created position : ", position)
            result(null, {...position})
            return
        }
    })   
}

module.exports = Position