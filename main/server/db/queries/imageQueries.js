const Image = require('../models/imageModel');

const imageQueries = {
    getImage: async function (filter) {
        const image = await Image.findOne(filter);
        return image;
    }
}


module.exports = imageQueries;