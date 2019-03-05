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
        res.send('create')
    },
    show: (req, res) => {
        User.find().then(users => {
            res.render('user/snoworski', { users })
        })
    },
    // show: (req, res) => {
    //     User.find().then(users => {
    //         res.render('user/snowboardcart', { users })
    //     })
    // },
    edit: (req, res) => {
        res.send('edit')
    },
    update: (req, res) => {
        res.send('update')
    },
    delete: (req, res) => {
        res.send('delete')
    }
};

module.exports = userController