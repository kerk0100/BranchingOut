const mongoose = require('mongoose');

// create schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    friends: [String]
}, { versionKey: false });

// create model
const User = mongoose.model('User', userSchema);

module.exports = User;