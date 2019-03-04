const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SnowboardSchema = new Schema ({
    boards: {
        large: Number,
        medium: Number,
        small: Number,
    },
    boots: {
        six: Number,
        seven: Number,
        eight: Number,
        nine: Number,
        ten: Number,
        eleven: Number,
        twelve: Number,
    }
});

module.exports = mongoose.model('Snowboard', SnowboardSchema);