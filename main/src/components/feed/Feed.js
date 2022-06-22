import Review from "../review/Review";
import CoffeeShop from "../coffeeShop/CoffeeShop";
import ListFrame from "../list/ListFrame";
import Friend from "../friend/Friend";
import "./styles.css"
import Navbar from "../nav/Navbar";

function Feed() {

  let sampleReview1 = <Review text="This coffee shop was only okay, they didn't have everything bagels." author="Amy" coffeeShop={<CoffeeShop name="Coffee Place" image="https://nomsmag.gumlet.io/wp-content/uploads/2021/09/best-burnaby-cafe-ki-cafe.jpg" hours="9am-10pm Sunday-Saturday"/>}/>;
  let sampleReview2 = <Review text="This place was the worst. Coffee was $7 and they didn't even have any to-go cups. They poured the coffee directly in my hands to slurp up on my way to work." author="Ben" coffeeShop={<CoffeeShop name="Cup of Brown" image="https://media.architecturaldigest.com/photos/625c34a97f06d08d30106ba7/master/w_2580%2Cc_limit/IMG_3133.jpg" hours="6am-4pm Monday-Friday"/>}/>;
  let sampleReview3 = <Review text="Coffee was great, vegan wraps were not" author="Lauren" coffeeShop={<CoffeeShop name="Coffeapolloza" image="https://media.architecturaldigest.com/photos/5b083c4675a4f940de3da8f1/master/w_2580%2Cc_limit/case-study-coffee.jpg" hours="5am - 1pm Monday-Thursday"/>}/>;
  let sampleFriend1 = <Friend name="Benji" count="6"/>
  let sampleFriend2 = <Friend name="Amy" count="9"/>
  let sampleFriend3 = <Friend name="Lauren" count="42"/>
  let sampleFriend4 = <Friend name="Liv" count="0"/>
  
  
  var sampleReviews = [sampleReview1, sampleReview2, sampleReview3]
  var sampleFriends = [sampleFriend1, sampleFriend2, sampleFriend3, sampleFriend4]
    return (
        <div>
          <Navbar />
          <div className="body">
            <ListFrame elements={sampleReviews} listName="reviewList" header="Reviews!"/>
            <ListFrame elements={sampleFriends} listName="friendList" header="Friends List!"/>
          </div>
        </div>
    );
  }
  
  export default Feed;