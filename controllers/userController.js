const User = require('../models/User');

const userController = {
    index: (req, res) => {
        User.find().then(users => {
            res.render('user/login', { users })
        })
    },
    new: (req, res) => {
        User.find().then(users => {
            res.render('user/signup', { users })
        })
    },
    create: (req, res) => {
        User.create(req.body).then(user => {
            res.redirect(`${user.id}/home`)
        })
    },
    edit: (req, res) => {
        User.findById(req.params.user).then(user => {
            res.render(`${user.id}/home`)
        })
    },
    show: (req, res) => {
        User.find().then(user => {
            res.render(`${user.id}/home`, { user })
        })
    },
    home: (req, res) => {
        User.findById(req.params.id).then(user => {
            res.render('user/home', { user })
        })
    },
    // update: (req, res) => {
    //     res.send('update')
    // },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.user).then(() => {
            console.log(user)
            console.log(`deleted recipe with the id of ${req.params.user}`)
            res.redirect('/')
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
};

module.exports = userController