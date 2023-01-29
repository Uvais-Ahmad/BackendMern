const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);console.log("MongoB URL ",process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on("error" , console.error.bind(console , "Error while connecting with the database "));
db.once('open',function(){
    console.log('Mongoose connected ');
})

module.exports = db;