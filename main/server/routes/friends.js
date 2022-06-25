var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');

let friend1 = {
    name: "Benji Lawson",
    reviewCount: "6",
    lastReviewed: "Cup of Brown Cafe"
}

let friend2 = {
    name: "Olivia ScarTony",
    reviewCount: "27",
    lastReviewed: "Starby's Iced Coffees Only"
}

let friend3 = {
    name: "Amy Nguyen",
    reviewCount: "14",
    lastReviewed: "Coffee World"
}

let friend4 = {
    name: "Lauren Kerker",
    reviewCount: "13",
    lastReviewed: "Jimmy Johns Vegan Fefes"
}

let friends = [friend1, friend2, friend3, friend4];

router.get('/', function(req, res, next) {
    res.send(friends);
});

module.exports = router;