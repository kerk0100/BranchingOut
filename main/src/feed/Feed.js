import Review from "../review/Review";
import CoffeeShop from "../coffeeShop/CoffeeShop";
import ListFrame from "../list/ListFrame";
import "./styles.css"

function Feed() {

  let sampleReview1 = <Review text="This coffee shop was only okay, they didn't have everything bagels." author="Amy" coffeeShop={<CoffeeShop name="Coffee Place"/>}/>;
  let sampleReview2 = <Review text="This place was the worst. Coffee was $7 and they didn't even have any to-go cups. They poured the coffee directly in my hands to slurp up on my way to work." author="Ben" coffeeShop={<CoffeeShop name="Cup of Brown"/>}/>;
  let sampleReview3 = <Review text="Coffee was great, vegan wraps were not" author="Lauren" coffeeShop={<CoffeeShop name="Coffeapolloza"/>}/>;
  var sampleData = [sampleReview1, sampleReview2, sampleReview3]
    return (
      <div className="body">
        <ListFrame elements={sampleData}/>
      </div>
    );
  }
  
  export default Feed;