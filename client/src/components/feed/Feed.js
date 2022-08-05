import Review from "../review/Review";
import React, { useEffect } from 'react';
import { useState} from "react";
import CoffeeShop from "../coffeeShop/CoffeeShop";
import ListFrame from "../list/ListFrame";
import Friend from "../friend/Friend";
import ReviewForm from "../reviewForm/reviewForm"
import "./styles.css"
import Navbar from "../nav/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsAsync } from "../../reducers/reviews/thunk";
import { addFriendAsync, getFriendsAsync } from "../../reducers/users/thunk";

function Feed() {
   const dispatch = useDispatch();
  function makeReviewComponents(review) {
    let coffeeShopComponent = <CoffeeShop name= {review.coffeeShop.name} image={review.coffeeShop.image} hours={review.coffeeShop.hours}/>;
    return <Review key={review.id} id={review.id} text={review.text} author={review.author} coffeeShop={coffeeShopComponent}/>;
  }

  const initFriendInput = {
    friendName: ""
  }
  const [addFriendInput, setAddFriendInput] = useState(initFriendInput);

  function handleInputChange(e) {
    const inputVal = document.getElementById("addFriendInput").value

    setAddFriendInput({
      ...addFriendInput,
      [e.target.name]: e.target.value
  });
}

  let reviewList = useSelector((state) => state.reviews.list);
  
  let reviewListComponents = reviewList.map(element => makeReviewComponents(element));

    useEffect(() => {
        dispatch(getReviewsAsync());
      }, []);

  let friendsList = useSelector(state => state.services.friendsList);

 
  useEffect(() => {
      dispatch(getFriendsAsync(localStorage.username));
    }, []);

  async function handleAddFriend(e) {
    const addF = await dispatch(addFriendAsync([localStorage.username, addFriendInput.friendName]));
    var messageStr
    if (addF.payload.message === "User cannot be found :(") {
        messageStr ="<b style='margin-left:18%;color:red;'>" + "User cannot be found :(" + "</b></center>";
    } else if (addF.payload.message === "User is already your friend :)") {
      messageStr ="<b style='margin-left:15%;color:green;'>" + "User is already your friend :)" + "</b></center>";
    } else {
      window.location.reload()
      messageStr ="<b style='margin-left:25%;color:green;'>" + "Friend added!" + "</b></center>";
    }
    document.getElementById("friendMessage").innerHTML = messageStr;
  }

  const listItems = friendsList.map((friend) => <Friend name={friend.username}/>);
  console.log(reviewListComponents);
    return (
        <div>
          <Navbar />
          <div className="feedBody">
            <div className="feedReviews">
              <ListFrame key="review" elements={reviewListComponents} listName="reviewList" />
            </div>
            <div className="feedFriends">
              <div>
                <h1 className="fListHeader">Friends</h1>
                <input 
                    id= "addFriendInput"
                    name= "friendName" 
                    className="addFriendInput"
                    type="text" 
                    // placeholder="username" 
                    onChange={handleInputChange}
                    value={addFriendInput.friendName}>
                </input>
                <input className="button-21" onClick={handleAddFriend} value="+"></input>
              </div>
              <div id="friendMessage"/>
                <ListFrame elements= {listItems} listName="friendList"/>
            </div>
          </div>
        </div>
    );
  }
  
  export default Feed;