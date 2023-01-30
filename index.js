const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
const db = require('./config/mongoose')
const cors = require('cors');
app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());


app.use('/',require('./routers'));
app.listen(port , function( err ){
    if(err){
        console.log('Error on running the server ')
    }
    console.log("Applicaion of Voosh success running on port ",port);
})
