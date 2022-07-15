import Review from "../review/Review";
import React, { useEffect } from 'react';
import CoffeeShop from "../coffeeShop/CoffeeShop";
import ListFrame from "../list/ListFrame";
import Friend from "../friend/Friend";
import ReviewForm from "../reviewForm/reviewForm"
import "./styles.css"
import Navbar from "../nav/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsAsync } from "../../reducers/reviews/thunk";
import { getFriendsAsync } from "../../reducers/services/thunk";

function Feed() {
   const dispatch = useDispatch();
  function makeReviewComponents(review) {
    let coffeeShopComponent = <CoffeeShop name= {review.coffeeShop.name} image={review.coffeeShop.image} hours={review.coffeeShop.hours}/>;
    return <Review key={review._id} text={review.text} author={review.author} coffeeShop={coffeeShopComponent}/>;
  }

  let reviewList = useSelector((state) => state.reviews.list);
  let reviewListComponents = reviewList.map(element => makeReviewComponents(element));

    useEffect(() => {
        dispatch(getReviewsAsync());
      }, []);

  let friendsList = useSelector(state => state.services.friendsList)

 
  useEffect(() => {
      dispatch(getFriendsAsync());
    }, []);


  const listItems = friendsList.map((friend) => <Friend name={friend.name} reviewCount={friend.reviewCount} lastReviewed={friend.lastReviewed}/>);
  
    return (
        <div>
          <Navbar />
          <div className="body">
            <ListFrame key="review" elements={reviewListComponents} listName="reviewList" />
            <ListFrame elements= {listItems} listName="friendList"/>
          </div>
        </div>
    );
  }
  
  export default Feed;