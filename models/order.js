const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    sub_total : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

const Order = mongoose.model("Order",orderSchema);
module.exports = Order;