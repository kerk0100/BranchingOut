import React, {useEffect, useState} from "react";
import './profile.css';
import Navbar from "../nav/Navbar";
import {getUserReviewsAsync, getReviewsCountAsync} from "../../reducers/reviews/thunk";
import {useDispatch, useSelector} from "react-redux";
import ListFrame from "../list/ListFrame";
import CoffeeShop from "../coffeeShop/CoffeeShop";
import Review from "../review/Review";
import PopUp from "../popup/popUp";
import {getFriendsAsync} from "../../reducers/users/thunk";

const ProfilePage = () => {
    const user = localStorage.getItem("username");
    const dispatch = useDispatch();
    const [count, setCount] = useState();
    let reviewList = useSelector((state) => state.reviews.list);
    let reviewListComponents;
    const [isOpenReviews, setIsOpenReviews] = useState(false);
    const [isOpenFriends, setIsOpenFriends] = useState(false);

    useEffect(() => {
        dispatch(getUserReviewsAsync(user));
    }, []);

    reviewListComponents = reviewList.map((review) =>
        <Review key={review.id} id={review.id} text={review.text} author={review.author} coffeeShop={<CoffeeShop name= {review.coffeeShop.name} image={review.coffeeShop.image} hours={review.coffeeShop.hours}/>} />
    );

    const togglePopupReviews = () => {
        setIsOpenReviews(!isOpenReviews);
    }

    const togglePopupFriends = () => {
        setIsOpenFriends(!isOpenFriends);
    }

    async function getReviewCount(user) {
        const response = await dispatch(getReviewsCountAsync(user));
        await dispatch(getFriendsAsync(localStorage.username));
        if (response.payload?.message === "No reviews found") {
            setCount(0);
        } else {
            setCount(response.payload);
        }
    }

    let friendsList = useSelector(state => state.services.friendsList);
    const friendsCount = friendsList.length;


    const listItems = friendsList.map((friend) => <p>{friend.username}</p>);

    return (
        <div onLoad={() => getReviewCount(user)}>
            <Navbar />
            <div className="app">
                <div className="login-form">
                    <div className='row-login'>
                        <div className="profileBox"><h2>{user}</h2></div>
                    </div>
                    <div className="row" id="reviews" onClick={() => togglePopupReviews()}>Reviews count: {count}</div>
                    <div className="row" id="friends" onClick={() => togglePopupFriends()}>Friends count: {friendsCount}</div>
                </div>
            </div>
            {isOpenReviews &&
                <PopUp
                    content={<>
                        <h2>My reviews</h2>
                        <ListFrame listName="userReviews" elements={reviewListComponents} key="review" />
                </>}
                    handleClose={togglePopupReviews}
                />}
            {isOpenFriends &&
                <PopUp
                    content={<>
                        <h2>Friends:</h2><br></br>
                        <ListFrame elements= {listItems} listName="test"/>
                    </>}
                    handleClose={togglePopupFriends}
                />}
        </div>


    )
};

export default ProfilePage;