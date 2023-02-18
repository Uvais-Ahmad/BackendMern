const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
const db = require('./config/mongoose')
const cors = require('cors');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
//config for aws        ::::This is ALL S3 setup using multer We not used .
aws.config.update({
    secretAccessKey:process.env.S3_SECRET_KEY,
    accessKeyId:process.env.S3_ACCESS_KEY,
    region:process.env.S3_REGION
})
const BUCKET = process.env.S3_BUCKET;
//create s3 instance
const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3:s3,
        bucket:BUCKET,
        acl:'public-read',   //acess control link
        key: ( req , file , cb)=> {
            console.log("File in upload ",file);
            cb(null , file.originalname)
        }
    })
})

app.post('/upload',upload.single('file') , async ( req , res )=>{   // .single(feild name of receving file)
    console.log(req.file)
    res.send(`Successfully uploaded to s3 ${req.file.location} location`)
})

app.get('/list' ,async ( req , res )=>{
    let response = await s3.listObjectsV2({Bucket:BUCKET}).promise();
    //response contain lot of info so require fecth
    let allkeys = await response.Contents.map(item =>item.Key);
    res.send(allkeys);
})

app.get('/download/:filename', async ( req , res )=>{

    const filename = req.params.filename;
    let x = await s3.getObject({Bucket:BUCKET,Key:filename}).promise();
    res.send(x.Body);
})

app.delete('/delete/:filename', async ( req , res )=>{

    const filename = req.params.filename;
    await s3.deleteObject({Bucket:BUCKET,Key:filename}).promise();
    res.send("File deleted success");
})

app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());




app.use('/',require('./routers'));
app.listen(port , function( err ){
    if(err){
        console.log('Error on running the server ')
    }
    console.log("Applicaion of Depo24 success running on port ",port);
})
