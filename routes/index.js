const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const snowboardController = require('../controllers/snowboardController.js');
const skiController = require('../controllers/skiController.js');

// user routes
router.get('/', userController.index);
router.get('/signup', userController.new)
router.post('/hometosnoworski', userController.create)
router.get('/:id/hometosnoworski', userController.hometosnoworski)
router.get('/:id/snowOrSki', userController.show)
router.get('/:id/userinfo', userController.userinfo)
router.get('/:id/home', userController.home)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

// snowboard routes
router.get('/snowboardcart', snowboardController.index)
router.get('/snowboardtotalcart', snowboardController.show)
router.get('/confirmationsnow', snowboardController.confirmation)

// ski routes
router.get('/skicart', skiController.index)
router.get('/skitotalcart', skiController.show)

// router.get('/skicart', skiController.index)



module.exports = router