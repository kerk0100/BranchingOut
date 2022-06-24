var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');


let users = [];

/* GET users. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/', function (req, res, next) {
  const user = {  userName: req.body[0], password: req.body[1], token: uuid() };
  users.push(user);

  return res
      .setHeader('Content-Type', 'application/json')
      .status(201)
      .send(user);
});

module.exports = router;
