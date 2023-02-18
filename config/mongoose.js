const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
// mongoose.connect(process.env.MONGODB_URL);
let url = 'mongodb+srv://uvaiszm5:CV8zMp7rcaP7sdCW@cluster0.8bfzuso.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url);
const db = mongoose.connection;

db.on("error" , console.error.bind(console , "Error while connecting with the database "));
db.once('open',function(){
    console.log('Mongoose connected ');
})

module.exports = db;