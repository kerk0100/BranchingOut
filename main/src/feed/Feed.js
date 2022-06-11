import Review from "../review/Review";
import CoffeeShop from "../coffeeShop/CoffeeShop";
import ListFrame from "../list/ListFrame";
import "./styles.css"

function Feed() {

  let sampleReview1 = <Review text="This coffee shop was only okay, they didn't have everything bagels." author="Amy" coffeeShop={<CoffeeShop name="Coffee Place" image="https://nomsmag.gumlet.io/wp-content/uploads/2021/09/best-burnaby-cafe-ki-cafe.jpg" hours="9am-10pm Sunday-Saturday"/>}/>;
  let sampleReview2 = <Review text="This place was the worst. Coffee was $7 and they didn't even have any to-go cups. They poured the coffee directly in my hands to slurp up on my way to work." author="Ben" coffeeShop={<CoffeeShop name="Cup of Brown" image="https://media.architecturaldigest.com/photos/625c34a97f06d08d30106ba7/master/w_2580%2Cc_limit/IMG_3133.jpg" hours="6am-4pm Monday-Friday"/>}/>;
  let sampleReview3 = <Review text="Coffee was great, vegan wraps were not" author="Lauren" coffeeShop={<CoffeeShop name="Coffeapolloza" image="https://media.architecturaldigest.com/photos/5b083c4675a4f940de3da8f1/master/w_2580%2Cc_limit/case-study-coffee.jpg" hours="5am - 1pm Monday-Thursday"/>}/>;
  var sampleData = [sampleReview1, sampleReview2, sampleReview3]
    return (
      <div className="body">
        <ListFrame elements={sampleData}/>
      </div>
    );
  }
  
  export default Feed;