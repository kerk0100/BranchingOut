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
        console.log(filter)
        console.log(set)
        const mapReview = await Map.updateOne(filter, set);
        console.log(mapReview)
        return mapReview;
    },
}


module.exports = mapQueries;