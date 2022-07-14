const express = require('express');
const router = express.Router();
// const { v4: uuid } = require('uuid');
const queries = require('../db/queries/reviewQueries');
const Review = require('../db/models/reviewModel');
const generateData = require('../db/generate-data');


// let sampleReview1 = {_id: uuid(), text: "This coffee shop was only okay, they didn't have everything bagels.", author:"Amy", coffeeShop:{name: "Coffee Place",  image:"https://nomsmag.gumlet.io/wp-content/uploads/2021/09/best-burnaby-cafe-ki-cafe.jpg", hours:"9am-10pm Sunday-Saturday"}};
// let sampleReview2 = {_id: uuid(), text:"This place was the worst. Coffee was $7 and they didn't even have any to-go cups. They poured the coffee directly in my hands to slurp up on my way to work.", author:"Ben", coffeeShop:{name:"Cup of Brown", image:"https://media.architecturaldigest.com/photos/625c34a97f06d08d30106ba7/master/w_2580%2Cc_limit/IMG_3133.jpg", hours: "6am-4pm Monday-Friday"}};
// let sampleReview3 = {_id: uuid(), text:"Coffee was great, vegan wraps were not", author:"Lauren," ,coffeeShop:{name:"Coffeapolloza", image:"https://media.architecturaldigest.com/photos/5b083c4675a4f940de3da8f1/master/w_2580%2Cc_limit/case-study-coffee.jpg", hours:"5am - 1pm Monday-Thursday"}};


// let reviews = [sampleReview1, sampleReview2, sampleReview3];

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
