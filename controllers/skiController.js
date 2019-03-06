const Ski = require('../models/Ski.js');

const skiController = {
    index: (req, res) => {
        Ski.find().then(skis => {
            res.render('ski/skicart', { skis })
        })
    },
    show: (req, res) => {
        Ski.find().then(skis => {
            res.render('ski/skitotalcart', { skis })
        })
    },
    confirmation: (req, res) => {
        Ski.find().then(snowboards => {
            res.render('ski/confirmationsnow', { skis })
        })
    },
};

module.exports = skiController