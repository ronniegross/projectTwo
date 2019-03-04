const User = require('../models/User.js');

const userController = {
    index: (req, res) => {
        res.send('sup')
    },
    new: (req, res) => {
        res.send('new')
    },
    create: (req, res) => {
        res.send('create')
    },
    show: (req, res) => {
        res.send('show')
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