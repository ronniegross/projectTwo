const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
// const snowboardController = require('../controllers/snowboardController.js');
// const skiController = require('../controllers/skiController.js');

// user routes
router.get('/', userController.index);

module.exports = router