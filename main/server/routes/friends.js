var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');
const queries = require("../db/queries/userQueries")

// let friend1 = {
//     name: "Benji Lawson",
//     reviewCount: "6",
//     lastReviewed: "Cup of Brown Cafe"
// }

// let friend2 = {
//     name: "Olivia ScarTony",
//     reviewCount: "27",
//     lastReviewed: "Starby's Iced Coffees Only"
// }

// let friend3 = {
//     name: "Amy Nguyen",
//     reviewCount: "14",
//     lastReviewed: "Coffee World"
// }

// let friend4 = {
//     name: "Lauren Kerker",
//     reviewCount: "13",
//     lastReviewed: "Jimmy Johns Vegan Fefes"
// }

// let friends = [friend1, friend2, friend3, friend4];

router.get('/:username', async function(req, res, next) {
    let user = await queries.getUser({"username": req.params.username});
    let friends = user.friends;

    if (friends.length > 0){
        let f_list = await queries.getAllUsers({username: {$in: friends}});
        res.send(f_list);
        return;
    }

    res.send(friends);
});

module.exports = router;