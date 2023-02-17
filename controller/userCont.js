const User = require('../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const puppeteer = require('puppeteer')

// For validating the form value at router level and check result of validation in controller
const { validationResult } = require('express-validator');
const Order = require('../models/order');
const UOrder = require('../models/userOrders');
const getHtmlContent = require('./pdfCreate');

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


module.exports.loginUser = async function( req , res ){
    try{
        let data = req.body;
        //it checks validation at router level and result show in Controller
        let errors = await validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(412).json({ message : "Validation failed",errors: errors.array() ,status:false});
        }
        //find via phone
        
        let user = await User.findOne({phone : data.phone});
        let isMatch;
        if(user ){
            isMatch = await bcrypt.compare(data.password , user.password);
        }
        
        if( !user || !isMatch){
            return res.status(401).json({
                message : "Invalid username and password",
                status:false
                
            })
        }

        //Generating the Token
        let token =await jwt.sign(user.toJSON() , process.env.JWT_Secret , {expiresIn : '100000000'} );

        
        // user is found and Set token in Cookies
        return res.cookie("access_token",token).status(200).json({
            message : "SignIn successfull",
            data : {
                access_token : token,
                id : user._id,
                name : user.name
            },
            status:true
        })
    }
    catch( err ){
        console.log(err)
        return res.status(400).json({
            message : "Error while login",
            status:false
        })
    }
}   


module.exports.addOrder = async function( req , res ){
    try{
        const data = req.body;
        const order = await Order.create({sub_total : data.sub_total ,phone : data.phone , user : req.user._id });
        return res.status(200).json({
            message : "Order Added",
            data : {
                //here we generate the token using encrpt key "codeial"
                orderDetail : order
            },
            status:true
        })
    }
    catch( err ){
        console.log(err)
        return res.status(400).json({
            message : "Error while adding order",
            status:false
        })
    }
    
}


module.exports.getOrder = async function( req , res ){

    try{
        let userId = req.params.id;
        let orders = await Order.find({user:userId});
        if(!orders){
            return res.status(400).json({
                message : "Not Found",
                status:false
            })
        }
        return res.status(200).json({
            message : "Order get",
            data : {
                orders : orders
            },
            status:true
        })

    }
    catch( err ){
        console.log(err)
        return res.status(400).json({
            message : "Error while finding order",
            status:false
        })
    }
}



// ==============================================================

module.exports.order = async function( req , res ){

    try{

    
        let data = req.body;
        console.log("Req Body ",data);
        let order = await UOrder.create(req.body);
        console.log("data receive for order ",data);

        return res.status(200).json({
            message : "Order Added",
            data : {
                //here we generate the token using encrpt key "codeial"
                orderDetail : order
            },
            status:true
        })
    }
    catch( err ){
        console.log(err)
        return res.status(400).json({
            message : "Error while create order",
            status:false
        })
    }

}

async function printPDF(data) {

    try{
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        let htmlll;

        await getHtmlContent(data.name).then(data=>htmlll = data);

        await page.setContent(htmlll);
        //   let urll = 'https://blog.risingstack.com';
        //   await page.goto(urll, {waitUntil: 'networkidle0'});

        page.emulateMediaType('screen')
        
        const pdf = await page.pdf({path:'my.pdf', format: 'A4',printBackground: true });
        
        await browser.close();
        return pdf

    }
    catch(err){
        console.log("Error occur ",err);
    }
  
}

printPDF({name:'UvaisAhmad'});



module.exports.getInvoice = async function( req , res ){
    let data = req.body;
    console.log("data in funct ",data);
    console.log("Functioncalled getInvoice ")

    let pdf = await printPDF(data);
    // res.send(pdf)
    console.log("Pdf created");
    

}

//Additional Feature
module.exports.logOut = function(req , res ){

    //Clear token from cookie

    return res.clearCookie("access_token").status(200).json({
        message : "logOut successfully"
    })
}
