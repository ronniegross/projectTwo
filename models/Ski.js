const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkiSchema = new Schema ({
    skis: {
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
    },
    poles: {
        large: Number,
        medium: Number,
        small: Number,
    }
});

module.exports = mongoose.model('Ski', SkiSchema);