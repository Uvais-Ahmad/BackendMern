const User = require('../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

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
        let token =await jwt.sign(user.toJSON() , "myVooshAssignment" , {expiresIn : '100000000'} );

        
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

//To store user product order in Db
module.exports.order = async function( req , res ){

    try{
        let arrOfBody = [];
        let data = req.body;
        if( !Array.isArray(data)){
            arrOfBody.push(data);
        }
        else arrOfBody = data;
    
        let order = await UOrder.create(arrOfBody);

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

//used to set Data into Invoice
async function printPDF(data,fileName) {

    try{
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        let htmlll;

        await getHtmlContent(data).then(data=>htmlll = data);

        await page.setContent(htmlll);

        page.emulateMediaType('screen')
        

        const pdf = await page.pdf({path:`${fileName}`, format: 'A4',printBackground: true });
        console.log("PDF GOT ",pdf);
        await browser.close();
        return pdf

    }
    catch(err){
        console.log("Error occur ",err);
    }
  
}

module.exports.getInvoice = async function( req , res ){
    let data = req.body;

    let arrOfBody = [];
    if( !Array.isArray(data)){
        arrOfBody.push(data);
    }
    else arrOfBody = data;

    let fileName = `${Date.now()}Invoice.pdf`;
    // console.log("FN : ",fileName);

    const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        let htmlll;

        await getHtmlContent(arrOfBody).then(data=>htmlll = data);

        await page.setContent(htmlll);

        page.emulateMediaType('screen')
        

        const pdf = await page.pdf({path:`${fileName}`, format: 'A4',printBackground: true });
        console.log("PDF GOT ",pdf);
        await browser.close();







    // let pdf = await printPDF(arrOfBody,fileName);
    // console.log("gottted pdf ",pdf);
    await res.setHeader('Content-Type','application/pdf');
    console.log("Pdf created",fileName);
    // return res.download(path.join(__dirname,`../${fileName}`));
    return res.send(pdf);
    
}

//Additional Feature
module.exports.logOut = function(req , res ){

    //Clear token from cookie
    return res.clearCookie("access_token").status(200).json({
        message : "logOut successfully"
    })
}


