const User = require('../models/User.js');

const userController = {
    index: (req, res) => {
        res.send('sup')
    }
};

module.exports = userController