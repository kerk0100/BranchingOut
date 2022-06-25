import Review from "../review/Review";
import CoffeeShop from "../coffeeShop/CoffeeShop";
import ListFrame from "../list/ListFrame";
import Friend from "../friend/Friend";
import "./styles.css"
import Navbar from "../nav/Navbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsAsync } from "../../reducers/reviews/thunk";


function Feed() {


  function makeReviewComponents(review) {
    let coffeeShopComponent = <CoffeeShop name= {review.coffeeShop.name} image={review.coffeeShop.image} hours={review.coffeeShop.hours}/>;
    return <Review key={review._id} text={review.text} author={review.author} coffeeShop={coffeeShopComponent}/>;
  }


  let sampleFriend1 = <Friend name="Benji" count="6"/>
  let sampleFriend2 = <Friend name="Amy" count="9"/>
  let sampleFriend3 = <Friend name="Lauren" count="42"/>
  let sampleFriend4 = <Friend name="Liv" count="0"/>
  
  
  var sampleFriends = [sampleFriend1, sampleFriend2, sampleFriend3, sampleFriend4]

  let reviewList = useSelector((state) => state.reviews.list);
  let reviewListComponents = reviewList.map(element => makeReviewComponents(element));

  const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getReviewsAsync());
      }, []);
      
    return (
        <div>
          <Navbar />
          <div className="body">
            <ListFrame key="review" elements={reviewListComponents} listName="reviewList" />
            <ListFrame key="friends" elements={sampleFriends} listName="friendList" />
          </div>
        </div>
    );
  }
  
  export default Feed;