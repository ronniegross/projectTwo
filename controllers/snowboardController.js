const Snowboard = require('../models/Snowboard.js');

const snowboardController = {
    index: (req, res) => {
        res.render('snowboard/snowboardcart')
    }
};

module.exports = snowboardController