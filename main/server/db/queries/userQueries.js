const User = require('../models/userModel');

const userQueries = {
    getAllUsers: async function (filter) {
        const users = await User.find(filter);
        return users;
    },
    getUser: async function (filter) {
        const user = await User.findOne(filter);
        return user;
    },
    addOneUser: async function (document) {
        const user = await User.create(document);
        return user;
    },
    updateOneUser: async function (filter, set) {
        const user = await User.updateOne(filter, set);
        return user;
    }
}


module.exports = userQueries;