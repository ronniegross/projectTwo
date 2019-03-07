const mongoose = require('./connection.js');
const User = require('../models/User.js');
// const Snowboard = require('../models/Snowboard.js');
// const Ski = require('../models/Ski.js');
const Payment = require('../models/Payment.js')
const Order = require('../models/Order.js')

const ronnie = new User({
    firstName: 'Ronnie',
    lastName: 'Gross',
    email: 'blah@blah.com',
    password: '123',
    age: 23,
    gear: [],
    paymentInfo: [],
})

const splewis = new User({
    firstName: 'Sp',
    lastName: 'Lewis',
    email: 'blah1@blah.com',
    password: '123',
    age: 26,
    gear: [],
    paymentInfo: [],
});

const ronnieCC = new Payment({
    fullName: 'Ronnie Gross',
    creditCardNumber: 1234957,
    expirationDate: '10/2019',
    CCVcode: 123,
})

const spCC = new Payment({
    fullName: 'SpLewis',
    creditCardNumber: 9876542,
    expirationDate: '10/2020',
    CCVcode: 321,
})

const ronnieOrder = new Order ({
    skiBoardType: 'Snowboard',
    skiBoardSize: 'Small',
    bootSize: 7.5,
    poleSize: 'None',
    liftTicket: true,
    totalPrice: 135,
});


// const totalSnowboards = new Snowboard({
//     boards: {
//         large: 50,
//         medium: 50,
//         small: 50,
//     },
//     boots: {
//         six: 25,
//         seven: 25,
//         eight: 25,
//         nine: 25,
//         ten: 25,
//         eleven: 25,
//         twelve: 25,
//     }
// });

// const totalSkis = new Ski({
//     skis: {
//         large: 50,
//         medium: 50,
//         small: 50,
//     },
//     boots: {
//         six: 25,
//         seven: 25,
//         eight: 25,
//         nine: 25,
//         ten: 25,
//         eleven: 25,
//         twelve: 25,
//     },
//     poles: {
//         large: 50,
//         medium: 50,
//         small: 50,
//     }
// })



User.deleteMany({})
    .then(() => User.create(ronnie, splewis))
    .then((user) => console.log(user, 'user database seeded successfully'))
    .catch((err) => console.log(err))

// Snowboard.deleteMany({})
//     .then(() => Snowboard.create(totalSnowboards))
//     .then((recipe) => console.log(recipe, 'snowboard database seeded successfully'))
//     .catch((err) => console.log(err))

// Ski.deleteMany({})
//     .then(() => Ski.create(totalSkis))
//     .then((recipe) => console.log(recipe, 'ski database seeded successfully'))
//     .catch((err) => console.log(err))

Payment.deleteMany({})
    .then(() => Payment.create(ronnieCC, spCC))
    .then((payment) => console.log(payment, 'payment database seeded successfully'))
    .catch((err) => console.log(err))

Order.deleteMany({})
    .then(() => Order.create(ronnieOrder))
    .then((order) => console.log(order, 'order database seeded successfully'))
    .catch((err) => console.log(err))