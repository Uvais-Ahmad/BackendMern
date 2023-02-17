const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticateToken');
const path = require('path')

const userC = require('../controller/userCont');
const { body } = require('express-validator');

//To register a new user
router.post('/add-user',
        body('name').isString().withMessage("Name not propper"),
        body('phone').isLength({min:10}).withMessage("Phone number is not correct must be min length 10"),
        body('password').isLength({min:1}).withMessage("Password required"),
        userC.addUser);

//to login as an existing user
router.post('/login-user',
        body('phone').isLength({min:10}).withMessage("Phone number is not correct must be min length 10"),
        body('password').isLength({min:1}).withMessage("Password required"),
        userC.loginUser);

//to set The orders data into the invoice
router.post('/getInvoice',userC.getInvoice)

//to download the generated Invoice
router.get('/downloadInvoice',( req , res )=>{
        return res.download(path.join(__dirname,'../my.pdf'));
})

// To store order of user in Database
router.post('/order',userC.order);

//additional feature
router.get('/logout',auth , userC.logOut);


module.exports = router;