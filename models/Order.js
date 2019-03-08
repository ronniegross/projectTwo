const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const OrderSchema = new Schema ({
    snowboard: String,
    snowboardBoots: String,
    ski: String,
    skiBoots: String,
    poleSize: String,
    liftTicket: String,
});

module.exports = mongoose.model('Order', OrderSchema);