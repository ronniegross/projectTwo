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
router.post('/:id/home', userController.edit)
// router.get('/:id/snowOrSki', userController.show)
router.delete('/:id/home', userController.delete)


// payment routes
router.get('/:userId/payment', paymentController.index)
router.post('/:userId/payment', paymentController.create)
router.delete('/:userId/payment', paymentController.delete)



module.exports = router