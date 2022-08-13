const Order = require('../models/order');

// Add Order
module.exports.add = async function(req, res){
    try{
        let order = new Order({
            orderQuantity: req.body.orderQuantity,
            status: 'Placed',
        });
        await order.save() 
        return res.status(200).json({
            data:{
                message: "Order added",
                orderDetails: order
            }
        })
    }catch(err){
        return res.send('Error in order placement'+ err);
    } 
}

// Delete Order
module.exports.delete = async function(req, res){
    try{
        let order= await Order.findById(req.params.id);
            await order.remove();
            return res.status(200).json({
                data:{
                    message: "Order removed from list",
                }
            })
    }catch(err){
        return res.send('Error in removing Order'+ err);
    } 
}

// Update quantity
module.exports.update = async function(req, res){
    try{
        let order= await Order.findById(req.params.id);
        let newQuantity = parseInt(req.body.newQuantity);
        order.orderQuantity = newQuantity
        await order.save() 
        return res.status(200).json({
            data:{
                message: "Order Quantity updated successfully",
                updated_order: order
            }
        })
    }catch(err){
        return res.send('Error in updating quantity'+ err);
    } 
}

// Update Status
module.exports.updateStatus = async function(req, res){
    try{
        let order= await Order.findById(req.params.id);
        let newStatus = req.body.newStatus;
        order.status = newStatus
        await order.save() 
        return res.status(200).json({
            data:{
                message: "Order Status updated successfully",
                updated_status: order.status
            }
        })
    }catch(err){
        return res.send('Error in updating Status'+ err);
    } 
}

// YYYY-MM-DD
// To Check Order on  Particular date
module.exports.checkCapacity = async function(req, res){
    try{
        let MAX_CAPICITY = 1000;
        let totalOrderQuantity = 0;
        let leftCapacity = 0;
        let onDate = await req.params.date;
        let allOrders= await Order.find({
            createdAt:{$gte: new Date(new Date(onDate).setHours(00, 00, 00)),
            $lt: new Date(new Date(onDate).setHours(23, 59, 59))}
        });
        for(let i = 0; i<allOrders.length; i++){
            totalOrderQuantity += allOrders[i].orderQuantity;
        }
        leftCapacity = MAX_CAPICITY - totalOrderQuantity;
        return res.status(200).json({
            data:{
                message: "Left milk on date",
                onDate: onDate,
                totalOrderQuantity: totalOrderQuantity,
                MaxCapacity: MAX_CAPICITY
            }
        })
    }catch(err){
        return res.send('Error in updating Status'+ err);
    } 
}

