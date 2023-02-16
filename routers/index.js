const express = require('express');
const router = express.Router();

router.use('/api/v1',require('./user'));

router.get('/getIn',(req , res )=>{
    return res.render('invoice');
})

module.exports = router;