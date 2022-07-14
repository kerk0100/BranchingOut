const mongoose = require('mongoose');

// create schema
const mapSchema = new mongoose.Schema({
    cafeName: String,
    reviews: String,
    hours: String,
    address: String,
    image: String
}, { versionKey: false });

// create model
const Map = mongoose.model('Map', mapSchema);

module.exports = Map;