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
    // create: (req, res) => {
    //     User.create(req.body).then(user => {
    //         res.redirect(`user/${user.id}/hometosnoworski`)
    //     })
    // },
    // show: (req, res) => {
    //     User.find().then(users => {
    //         res.render(`user/${user.id}/hometosnoworski`, { users })
    //     })
    // },
    create: (req, res) => {
        User.create(req.body).then(user => {
            // user.save()
            res.redirect(`${user.id}/hometosnoworski`)
        })
    },
    show: (req, res) => {
        User.find().then(user => {
            res.render(`${user.id}/hometosnoworski`, { user })
        })
    },
    userinfo: (req, res) => {
        User.find().then(users => {
            res.render('user/userinfo', { users })
        })
    },
    home: (req, res) => {
        User.find().then(users => {
            res.render('user/home', { users })
        })
    },
    // hometosnoworski: (req, res) => {
    //     User.find().then(user => {
    //         const id = (req.params.id)
    //         User.findById(id)
    //         console.log(id)
    //         res.render('user/hometosnoworski', { user })
    //     })
    // },
    hometosnoworski: (req, res) => {
        User.findById(req.params.id).then(user => {
            console.log(user)
            res.render('user/hometosnoworski', { user })
        })
    },
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