const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
// const snowboardController = require('../controllers/snowboardController.js');
// const skiController = require('../controllers/skiController.js');

// user routes
router.get('/', userController.index);
router.get('/signup', userController.new)
router.post('/', userController.create)
router.get('/:id', userController.show)
router.get('/:id/edit', userController.edit)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)


module.exports = router