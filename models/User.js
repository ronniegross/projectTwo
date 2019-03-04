const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    birthDate: Date,
    height: Number,
    weight: Number,
    gear: [],
});

module.exports = mongoose.model('User', UserSchema);