const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const OrderSchema = new Schema ({
    skiBoardType: String,
    skiBoardSize: String,
    bootSize: Number,
    poleSize: String,
    liftTicket: Boolean,
    totalPrice: Number,
});

module.exports = mongoose.model('OrderInfo', OrderSchema);