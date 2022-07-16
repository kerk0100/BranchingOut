const mongoose = require('mongoose');

// create schema
const reviewSchema = new mongoose.Schema({
    id: String,
    text: String,
    author: String, // of reviewer
    coffeeShop: {
        name: String,
        image: String,
        hours: String, 
        address: String
    }
}, { versionKey: false });

// create model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;