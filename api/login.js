const express = require('express')
const router = express.Router()

module.exports = router

router.post('/', async(req,res) => {
    //1.check require
    if(!req.body.login || !req.body.pass)
    {
        return res.send(
            {
                ok: false,
                message: 'Please,Check your Username and Password',
            }
        )
    }


let rows = await req.db('user')
    .where('login','=',req.body.login || '')
    .where('pass','=',req.body.pass || '')
    if(rows.length === 0)
    {
        return res.send(
            {
                ok: false,
                message: 'Your username or password is wrong',
            }
        )
    }

    let user = row[0]

    // TODO: save data in session
    // req.session.data = user
    req.$socket.publish('login','${user.name} is logged in')

    res.send({
        ok: true,
        user,
    })
})