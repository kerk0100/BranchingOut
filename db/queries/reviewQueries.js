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
    countReviews: async function (filter) {
    const reviews = await Review.countDocuments(filter);
    return reviews;
    },
    updateOneReview: async function (filter, set) {
        const review = await Review.updateOne(filter, set);
        return review;
    },
    deleteOneReview: async function (filter) {
        const review = await Review.deleteOne(filter);
        return review;
    }
}


module.exports = reviewQueries;