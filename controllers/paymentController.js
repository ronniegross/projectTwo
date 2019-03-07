const Payment = require('../models/Payment');
const User = require('../models/User');

const paymentController = {
    index: (req, res) => {
        User.findById(req.params.userId).then(user => {
            if (user.payment !== "") {
                Payment.findById(user.payment).then(payment => {
                    res.render(`payment/payment`, { user, payment })
                })
            } else {
                res.render('payment/payment', { user })
            }
        })
    },
    create: (req, res) => {
        Payment.create(req.body).then(payment => {
            User.findByIdAndUpdate(req.params.userId, {payment: payment.id}).then(user => {
                res.redirect(`/${user.id}/home`)
            })
        })
    },
    delete: (req, res) => {
        User.findById(req.params.userId).then(user => {
            Payment.findByIdAndDelete(user.payment).then(payment => {
                User.findByIdAndUpdate(req.params.userId, {payment: ""}).then(user => {
                    res.redirect(`/${user.id}/home`)
                })
            })
        })
    }
}



module.exports = paymentController
