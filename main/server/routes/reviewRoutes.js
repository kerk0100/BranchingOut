const express = require('express');
const router = express.Router();
// const { v4: uuid } = require('uuid');
const queries = require('../db/queries/reviewQueries');
const Review = require('../db/models/reviewModel');
const generateData = require('../db/generate-data');


/* GET reviews. */
router.get('/', async function(req, res, next) {
  const reviews = await queries.getAllReviews({});
  res.send(reviews);
});


/* POST reviews. */
router.post('/', async function (req, res, next) {
  const coffeeShop = {name: req.body.name, image:req.body.image, hours: req.body.hours}
  const review = new Review({text: req.body.text, author: req.body.author, coffeeShop: coffeeShop});
  // reviews.push(review);
  const addedReview = await queries.addOneReview(review);
  return res
      .setHeader('Content-Type', 'application/json')
      .status(201)
      .send(addedReview);
});

module.exports = router;
