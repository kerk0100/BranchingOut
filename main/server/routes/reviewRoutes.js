const express = require('express');
const router = express.Router();
const queries = require('../db/queries/reviewQueries');
const mapQueries = require('../db/queries/mapQueries');
const Review = require('../db/models/reviewModel');

/* GET reviews. */
router.get('/', async function(req, res, next) {
  console.log(req.body)
  const reviews = await queries.getAllReviews({find: req.body});
  //console.log(reviews);
  res.send(reviews);
});

/* GET a user's reviews. */
router.get('/:username', async function(req, res, next) {
  const reviews = await queries.getAllReviews({author: req.params.username});
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
  await mapQueries.updateOneMapReview(
    {"name": req.body.coffeeShop.name, "address": req.body.coffeeShop.address}, { $push: {reviews: req.body.id}}
    );
  return res.send(addedReview);
});

/* DELETE reviews. */
router.delete('/:id', async function(req, res, next) {
  const reviews = await queries.deleteOneReview({id: req.params.id});
  res.send(reviews);
});

module.exports = router;
