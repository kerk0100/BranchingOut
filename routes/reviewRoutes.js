const express = require('express');
const router = express.Router();
const queries = require('../db/queries/reviewQueries');
const mapQueries = require('../db/queries/mapQueries');
const imageQueries = require('../db/queries/imageQueries');
const Review = require('../db/models/reviewModel');
const Image = require('../db/models/imageModel');
const multer  = require('multer');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' , rename: function (fieldname, filename) {
    return filename;
  }});

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
  // console.log(req.body.id);
  const image = await imageQueries.getImage({reviewId: req.body.id});
  // console.log("test hi im here");
  // console.log(image);
  if (image === null) {
    return res.status(500).send("Error processing image, please try again")
  }
  const coffeeShop = {name: req.body.coffeeShop.name, image:'/' + image.path, hours: req.body.coffeeShop.hours}
  const review = new Review({id: req.body.id, text: req.body.text, author: req.body.author, coffeeShop: coffeeShop});
  const addedReview = await queries.addOneReview(review);
  await mapQueries.updateOneMapReview(
    {"name": req.body.coffeeShop.name, "address": req.body.coffeeShop.address}, { $push: {reviews: req.body.id}}
    );
  // console.log(addedReview);
  return res.send(addedReview);
});

/* DELETE reviews. */
router.delete('/:id', async function(req, res, next) {
  const reviews = await queries.deleteOneReview({id: req.params.id});
  res.send(reviews);
});


/* POST image. */
router.post('/image/:id', upload.single('imageFile'), async function (req, res, next) {
  const newImage = new Image();
  const imageName = req.file.originalname;
  // newImage.img.data = fs.readFileSync(req.file.path);
  newImage.contentType = 'image/png';
  newImage.name = imageName;
  newImage.reviewId = req.params.id;
  newImage.path = req.file.path;
  await newImage.save();
  res.send('Image name: ' + imageName);
});

/* PUT reviews. */
router.put('/:id', async function(req, res, next) {
  console.log(req.params)
  console.log(req.body)
  const reviews = await queries.updateOneReview({"id": req.params.id}, { $set: {text: req.body.text} });
  res.send(reviews);
});

module.exports = router;
