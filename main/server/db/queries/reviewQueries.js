const Review = require('../models/reviewModel');

const reviewQueries = {
    getAllReviews: async function (filter) {
        const reviews = await Review.find(filter);
        return reviews;
    },
    addOneReview: async function (document) {
        const review = await Review.create(document);
        return review;
    },
    updateOneReview: async function (filter, set) {
        const review = await Review.updateOne(filter, set);
        return review;
    },
}


module.exports = reviewQueries;