const mongoose = require('mongoose');

// create schema
const mapSchema = new mongoose.Schema({
    name: String,
    hours: String,
    address: String,
    coordinates: [String],
    reviews: [String]
}, { versionKey: false });

// create model
const Map = mongoose.model('Map', mapSchema);

module.exports = Map;