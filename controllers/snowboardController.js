const Snowboard = require('../models/Snowboard.js');

const snowboardController = {
    index: (req, res) => {
        Snowboard.find().then(snowboards => {
            res.render('snowboard/snowboardcart', { snowboards })
        })
    },
    show: (req, res) => {
        Snowboard.find().then(snowboards => {
            res.render('snowboard/snowboardtotalcart', { snowboards })
        })
    },
    confirmation: (req, res) => {
        Snowboard.find().then(snowboards => {
            res.render('snowboard/confirmationsnow', { snowboards })
        })
    },
};

module.exports = snowboardController