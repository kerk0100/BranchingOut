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

router.get('/auth/:username/:password', async function (req, res, next) {
  // const foundUser = users.find(user => user.id === req.params.userId);
  const user = await queries.getUser({username: req.params.username, password: req.params.password});

  if (!user) return res.status(404).send({ message: 'User not found' });

  return res.send(user);
});

router.post('/', async function (req, res, next) {
  const user = { username: req.body[0], password: req.body[1], friends: []};
  //users.push(user);
  const addedUser = await queries.addOneUser(user)

  return res
      .setHeader('Content-Type', 'application/json')
      .status(201)
      .send(addedUser);
});

module.exports = router;
