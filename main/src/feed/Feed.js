import Review from "../review/Review";
import CoffeeShop from "../coffeeShop/CoffeeShop";
import ListFrame from "../list/ListFrame";

function Feed() {
    return (
      <div className="body">
        <ListFrame elements={[<Review text="this is a sample review" author="Amy" coffeeShop={<CoffeeShop/>}/>]}/>

            {/* <Review text="this is a sample review" author="Amy" coffeeShop={<CoffeeShop/>}/> */}
      </div>
    );
  }
  
  export default Feed;