const express = require('express');
const router = express.Router();
const queries = require('../db/queries/reviewQueries');
const Review = require('../db/models/reviewModel');


/* GET reviews. */
router.get('/', async function(req, res, next) {
  const reviews = await queries.getAllReviews({});
  res.send(reviews);
});

router.get('/count/:username', async function(req, res, next) {
  const reviews = await queries.countReviews({author: req.params.username});
  console.log('reviews ' + reviews);
  if (!reviews) return res.status(404).send({ message: 'No reviews found' });

  return res.send(""+reviews);
});

/* POST reviews. */
router.post('/', async function (req, res, next) {
  const coffeeShop = {name: req.body.coffeeShop.name, image:req.body.coffeeShop.image, hours: req.body.coffeeShop.hours}
  const review = new Review({text: req.body.text, author: req.body.author, coffeeShop: coffeeShop});
  //reviews.push(review);
  console.log(review);
  const addedReview = await queries.addOneReview(review);
  return res.send(addedReview);
});

module.exports = router;
