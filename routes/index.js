const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order_controller');

// For Home
router.get('/', orderController.home);

// API to add order to the database
router.post('/add', orderController.add);

// API to update quantity of a order
router.post('/update/:id/', orderController.update);

// API to update status of a order
router.post('/updateStatus/:id/', orderController.updateStatus);

// API to delete order
router.delete('/delete/:id/', orderController.delete);

// API to check order capacity for a particular day
router.post('/checkCapacity/:date/', orderController.checkCapacity);


// Exporting router
module.exports = router;