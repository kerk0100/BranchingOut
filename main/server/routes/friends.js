var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');
const queries = require("../db/queries/userQueries")

router.get('/:username', async function(req, res, next) {
    let user = await queries.getUser({"username": req.params.username});
    if (!user) return res.send([])
    let friends = user.friends;

    if (friends.length > 0){
        let f_list = await queries.getAllUsers({username: {$in: friends}});
        res.send(f_list);
        return;
    }

    res.send(friends);
});

router.get('/add/', async function(req, res, next) {
    const user = await queries.getUser({username: req.body[0]});
    const allUsers = await queries.getAllUsers({});
    const newFriend = req.body[1];
    if (!user) return res.status(404).send({ message: 'Current user not found' });
    
    let found = false;
    allUsers.forEach(friend => {
        if (friend.username.toLowerCase() === newFriend.toLowerCase()){
            found = true
        }
    });
    if (!found) return res.status(404).send({ message: 'Cannot find user :(' });

    user.friends.forEach(name => {
        if (name.toLowerCase() === newFriend.toLowerCase()){
            return res.status(404).send({ message: "You're already friends with this that user!" });
        }
    });


    user.friends.push(newFriend);
    user.save()

    return res.status(200).send({ message: 'Friend successfully added!' });
});

module.exports = router;