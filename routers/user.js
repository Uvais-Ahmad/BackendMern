const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticateToken');

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

        
router.post('/add-order',
                body('sub_total').isLength({min:1}).withMessage("sub_total required "),
                body('phone').isLength({min:10}).withMessage("phone required "),
                auth,
                userC.addOrder);


router.get('/get-order/:id',auth,userC.getOrder);

//additional feature
router.get('/logout',auth , userC.logOut);


module.exports = router;