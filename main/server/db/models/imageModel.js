const mongoose = require('mongoose');

// create schema
const itemSchema = new mongoose.Schema( {
    img: {
        data: Buffer,
        contentType: String,
        name: String,
        reviewId: String
    }
}, { versionKey: false });

// create model
const Image = mongoose.model('Image', itemSchema);

module.exports = Image;