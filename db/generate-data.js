const User = require('./models/userModel');
const Review = require('./models/reviewModel');
const Map = require('./models/mapModel');
const { v4: uuid } = require('uuid');

async function generateData() {
    // create users
    const user1 = new User({
        username: "Amy",
        password: "amypassword"
    });
    const user2 = new User({
        username: "liv",
        password: "livpassword"
    });

    // create reviews
    const review1 = new Review({
        id: uuid(),
        text: "This coffee shop was only okay, they didn't have everything bagels.",
        author: "Amy",
        coffeeShop: {
            name:"Coffee Place",
            image: "https://nomsmag.gumlet.io/wp-content/uploads/2021/09/best-burnaby-cafe-ki-cafe.jpg",
            hours:"9am-10pm Sunday-Saturday"
        }
    });
    const review2 = new Review({
        id: uuid(),
        text:"This place was the worst. Coffee was $7 and they didn't even have any to-go cups. They poured the coffee directly in my hands to slurp up on my way to work.",
        author:"Ben",
        coffeeShop:{
            name:"Cup of Brown",
            image:"https://media.architecturaldigest.com/photos/625c34a97f06d08d30106ba7/master/w_2580%2Cc_limit/IMG_3133.jpg",
            hours:"6am-4pm Monday-Friday"
        }
    });
    const review3 = new Review({
        id: uuid(),
        text:"Coffee was great, vegan wraps were not",
        author:"Lauren,",
        coffeeShop:{
            name:"Coffeapolloza",
            image:"https://media.architecturaldigest.com/photos/5b083c4675a4f940de3da8f1/master/w_2580%2Cc_limit/case-study-coffee.jpg",
            hours:"5am - 1pm Monday-Thursday"
        }
    });
    // Create map reviews
    // const mapReview1 = new Map({
    //     cafeName: "JJ Bean",
    //     hours: "7am - 9pm",
    //     address: "4593 W 7th Ave."
    // });

    //await user1.save();
    //await user2.save();
    // await review1.save();
    // await review2.save();
    // await review3.save();
   //await mapReview1.save();
}

module.exports = generateData;