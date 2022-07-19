const mongoose = require('mongoose');

// create schema
const mapSchema = new mongoose.Schema({
    cafeName: String,
    hours: String,
    address: String,
    coordinates: [String]
}, { versionKey: false });

// create model
const Map = mongoose.model('Map', mapSchema);

module.exports = Map;