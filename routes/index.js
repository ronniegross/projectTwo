const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const paymentController = require('../controllers/paymentController.js')
const orderController = require('../controllers/orderController.js')

// user routes
router.get('/', userController.index);
router.get('/signup', userController.new)
router.post('/home', userController.create)
router.get('/:id/home', userController.home)
router.put('/:id/home', userController.edit)
// router.get('/:id/snowOrSki', userController.show)
router.delete('/:id/home', userController.delete)


// payment routes
router.get('/:userId/payment', paymentController.index)
router.post('/:userId/payment', paymentController.create)
router.delete('/:userId/payment', paymentController.delete)

// order routes
router.get('/:userId/order', orderController.index)
router.post('/:userId/order', orderController.create)
router.delete('/:userId/order', orderController.delete)

module.exports = router