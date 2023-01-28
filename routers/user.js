const express = require('express');
const router = express.Router();

const userC = require('../controller/userCont');
const { body } = require('express-validator');

router.post('/add-user',
        body('name').isString().withMessage("Name not propper"),
        body('phone').isLength({min:10}).withMessage("Phone number is not correct must be min length 10"),
        body('password').isLength({min:1}).withMessage("Password required"),
        userC.addUser);


router.post('/login-user',
        body('phone').isLength({min:10}).withMessage("Phone number is not correct must be min length 10"),
        body('password').isLength({min:1}).withMessage("Password required"),
        userC.loginUser);

        
router.post('/add-order');
router.get('/get-order');


module.exports = router;