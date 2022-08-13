const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderQuantity:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    }
},{timestamps:true})

const Order = mongoose.model('Order', orderSchema);
// exporting schema
module.exports = Order;