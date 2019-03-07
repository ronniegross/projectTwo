const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    orders: [],
    paymentInfo: [],
});

module.exports = mongoose.model('User', UserSchema);