const express = require('express')
const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
    res.send('<h1>Home API</h1>')
})
router.get('/student', (req, res) => {
    res.send("<h1>Student API</h1>")
})