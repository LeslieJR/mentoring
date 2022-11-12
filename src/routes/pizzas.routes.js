const {Router} = require('express')

const router = Router()

router.post('/create', (req, res)=> {
    res.send('new pizza')
})
router.get('/get/:id', (req, res)=> {
    res.send('pizza')
})

module.exports = router