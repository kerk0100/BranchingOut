const Map = require('../models/mapModel');

const mapQueries = {
    getAllMapReviews: async function (filter) {
        const mapReviews = await Map.find(filter);
        return mapReviews;
    },
    addOneMapReview: async function (document) {
        const mapReview = await Map.create(document);
        return mapReview;
    },
    updateOneMapReview: async function (filter, set) {
        const mapReview = await Map.updateOne(filter, set);
        return mapReview;
    },
}


module.exports = mapQueries;