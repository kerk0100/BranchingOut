const express = require('express');
const router = express.Router();
const queries = require('../db/queries/userQueries');
const generateData = require('../db/generate-data')


/* GET users. */
router.get('/', async function(req, res, next) {
  // await generateData();
  const users = await queries.getAllUsers({});
  res.send(users);
});

router.post('/', async function (req, res, next) {
  const user = { username: req.body[0], password: req.body[1] };
  //users.push(user);
  const addedUser = await queries.addOneUser(user)

  return res
      .setHeader('Content-Type', 'application/json')
      .status(201)
      .send(addedUser);
});

module.exports = router;
