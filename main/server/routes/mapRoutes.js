const express = require('express');
const router = express.Router();
// const { v4: uuid } = require('uuid');
const queries = require('../db/queries/mapQueries');
const Map = require('../db/models/mapModel');
const generateData = require('../db/generate-data');

/* GET reviews. */
router.get('/', async function(req, res, next) {
  // await generateData();
  console.log("here")
  console.log(req.body)
  const mapReviews = await queries.getAllMapReviews(req.body);
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