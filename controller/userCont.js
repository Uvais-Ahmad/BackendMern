const User = require('../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');

// For validating the form value at router level and check result of validation in controller
const { validationResult } = require('express-validator');

//  To signup or create new user in db
module.exports.addUser = async function(req , res ){
    try{
        let data = req.body;
        //it checks validation at router level and result show in Controller
        let errors = await validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(412).json({ message : "Validation failed",errors: errors.array(),status:false });
        }

        //check user passwords
        if(data.password != data.confirm_password){
            return res.status(401).json({
                message : "Both password and confirm password must equal",
                status:false
            })
        }

        //Check user is already register
        let existUser = await User.findOne({phone : data.phone});
        if(existUser){
            return res.status(409).json({
                message : "Already you have an account , Please login with same phone Number",
                status:false
            })
        }
        else{
            // Generate hash password
            let salt = await bcrypt.genSalt(saltRounds);
            let hash = await bcrypt.hash(data.password , salt);

            //create User and store hash password
            let user = await User.create({name :data.name , phone : data.phone ,password : hash });
            return res.status(200).json({
                message : "Successfully Account created",
                data : {
                    user : user
                },
                status:true
            })
        }
    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            message : "Error while register user",
            status:false
        })
    }     
}
