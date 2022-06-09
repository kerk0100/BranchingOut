import Review from "../review/Review";
import CoffeeShop from "../coffeeShop/CoffeeShop";

function Feed() {
    return (
      <div className="body">
            <Review text="this is a sample review" author="Amy" coffeeShop={<CoffeeShop/>}/>
      </div>
    );
  }
  
  export default Feed;