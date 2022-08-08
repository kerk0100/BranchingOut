const express = require('express');
const router = express.Router();
const queries = require('../db/queries/mapQueries');
const Map = require('../db/models/mapModel');

/* GET reviews. */
router.get('/', async function(req, res, next) {

  const mapReviews = await queries.getAllMapReviews({});
  res.send(mapReviews);
});

router.get('/:name', async function(req, res, next) {
  console.log(req.params)
  const mapReviews = await queries.getAllMapReviews({'name': req.params.name});
  res.send(mapReviews);
});


/* POST reviews. */
router.post('/', async function (req, res, next) {
  const map = new Map({cafeName: req.body.cafeName, hours: req.body.hours, address: req.body.address});
  const addedReview = await queries.addOneMapReview(map);
  return res
      .setHeader('Content-Type', 'application/json')
      .status(201)
      .send(addedReview);
});

module.exports = router;