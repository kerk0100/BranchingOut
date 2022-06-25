import Review from "../review/Review";
import React, { useEffect } from 'react';
import CoffeeShop from "../coffeeShop/CoffeeShop";
import ListFrame from "../list/ListFrame";
import Friend from "../friend/Friend";
import "./styles.css"
import Navbar from "../nav/Navbar";
import {  useSelector, useDispatch } from 'react-redux';
import { getFriendsAsync } from "../../reducers/services/thunk";

function Feed() {

  let friendsList = useSelector(state => state.services.friendsList)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getFriendsAsync());
    }, []);

  let sampleReview1 = <Review text="This coffee shop was only okay, they didn't have everything bagels." author="Amy" coffeeShop={<CoffeeShop name="Coffee Place" image="https://nomsmag.gumlet.io/wp-content/uploads/2021/09/best-burnaby-cafe-ki-cafe.jpg" hours="9am-10pm Sunday-Saturday"/>}/>;
  let sampleReview2 = <Review text="This place was the worst. Coffee was $7 and they didn't even have any to-go cups. They poured the coffee directly in my hands to slurp up on my way to work." author="Ben" coffeeShop={<CoffeeShop name="Cup of Brown" image="https://media.architecturaldigest.com/photos/625c34a97f06d08d30106ba7/master/w_2580%2Cc_limit/IMG_3133.jpg" hours="6am-4pm Monday-Friday"/>}/>;
  let sampleReview3 = <Review text="Coffee was great, vegan wraps were not" author="Lauren" coffeeShop={<CoffeeShop name="Coffeapolloza" image="https://media.architecturaldigest.com/photos/5b083c4675a4f940de3da8f1/master/w_2580%2Cc_limit/case-study-coffee.jpg" hours="5am - 1pm Monday-Thursday"/>}/>;
  

  const listItems = friendsList.map((friend) => <Friend name={friend.name} reviewCount={friend.reviewCount} lastReviewed={friend.lastReviewed}/>);
  
  
  var sampleReviews = [sampleReview1, sampleReview2, sampleReview3]
    return (
        <div>
          <Navbar />
          <div className="body">
            <ListFrame elements={sampleReviews} listName="reviewList" header="Reviews!"/>
            <ListFrame elements= {listItems} listName="friendList" header="Friends List!"/>
          </div>
        </div>
    );
  }
  
  export default Feed;