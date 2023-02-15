const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    DSIN : {
        type : String,
        required : true
    },
    SysListName : {
        type : String,
        required : true
    },
    MRP : {
        type : Number,
        required : true
    },
    HSNCode : {
        type : Number,
        required : true
    },
    GSTSlab : {
        type : Number,
        required : true
    },
    Unit : {
        type : Number,
        required : true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

const UOrder = mongoose.model("UOrder",orderSchema);
module.exports = UOrder;