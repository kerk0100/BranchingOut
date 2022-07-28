const express = require('express');
const router = express.Router();
const queries = require('../db/queries/reviewQueries');
const Review = require('../db/models/reviewModel');

/* GET reviews. */
router.get('/', async function(req, res, next) {
  const reviews = await queries.getAllReviews({});

  res.send(reviews);
});

/* GET a user's reviews. */
router.get('/:username', async function(req, res, next) {
  const reviews = await queries.getAllReviews({author: req.params.username});
  console.log("routes reviewss " + reviews);
  if (!reviews) return res.status(404).send({ message: 'No reviews found' });

  res.send(reviews);
});

/* GET user review count. */
router.get('/count/:username', async function(req, res, next) {
  const reviews = await queries.countReviews({author: req.params.username});
  if (!reviews) return res.status(404).send({ message: 'No reviews found' });

  return res.send(""+reviews);
});

/* POST reviews. */
router.post('/', async function (req, res, next) {
  const coffeeShop = {name: req.body.coffeeShop.name, image:req.body.coffeeShop.image, hours: req.body.coffeeShop.hours}
  const review = new Review({id: req.body.id, text: req.body.text, author: req.body.author, coffeeShop: coffeeShop});
  const addedReview = await queries.addOneReview(review);
  return res.send(addedReview);
});

/* DELETE reviews. */
router.delete('/:id', async function(req, res, next) {
  const reviews = await queries.deleteOneReview({id: req.params.id});
  res.send(reviews);
});

module.exports = router;
