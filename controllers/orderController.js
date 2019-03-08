const Order = require('../models/Order');
const User = require('../models/User');

const OrderController = {
    index: (req, res) => {
        User.findById(req.params.userId).then(user => {
            if (user.order !== "") {
                Order.findById(user.order).then(order => {
                    res.render(`order/order`, { user, order })
                })
            } else {
                res.render('order/order', { user })
            }
        })
    },
    create: (req, res) => {
        Order.create(req.body).then(order => {
            User.findByIdAndUpdate(req.params.userId, {order: order.id}).then(user => {
                res.redirect(`/${user.id}/home`)
            })
        })
    },
    delete: (req, res) => {
        User.findById(req.params.userId).then(user => {
            Order.findByIdAndDelete(user.order).then(order => {
                User.findByIdAndUpdate(req.params.userId, {order: ""}).then(user => {
                    res.redirect(`/${user.id}/home`)
                })
            })
        })
    }
}

module.exports = OrderController