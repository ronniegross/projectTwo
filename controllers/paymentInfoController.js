const Payment = require('../models/Payment');

const paymentController = {
    index: (req, res) => {
        Payment.find().then(payment => {
            res.render('ski/skicart', { payment })
        })
    },
}

module.exports = paymentController