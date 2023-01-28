const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();

app.use(cookieParser());
app.use(express.urlencoded({extended : true}));


app.listen(port , function( err ){
    if(err){
        console.log('Error on running the server ')
    }
    console.log("Applicaion of Voosh success running on port ",port);
})
