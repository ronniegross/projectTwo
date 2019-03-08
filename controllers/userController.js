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
        User.findByIdAndUpdate(req.params.id, req.body).then(user => {
            res.redirect(`/${user.id}/home`)
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
        User.findByIdAndDelete(req.params.id).then(user => {
            res.redirect('/')
        })
    }
};

module.exports = userController