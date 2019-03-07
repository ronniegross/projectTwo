const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema ({
    fullName: String,
    creditCardNumber: Number,
    expirationDate: String,
    CCVcode: Number,
});

module.exports = mongoose.model('Payment', PaymentSchema);