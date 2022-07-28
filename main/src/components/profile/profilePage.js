import React, {useEffect, useState} from "react";
import './profile.css';
import Navbar from "../nav/Navbar";
import pug from "./pug.jpg";
import {getUserReviewsAsync, getReviewsCountAsync, getReviewsAsync} from "../../reducers/reviews/thunk";
import {useDispatch, useSelector} from "react-redux";
import ListFrame from "../list/ListFrame";
import CoffeeShop from "../coffeeShop/CoffeeShop";
import Review from "../review/Review";

const ProfilePage = () => {
    const user = localStorage.getItem("username");
    const friendsCount = localStorage.getItem("friendsCount");
    const dispatch = useDispatch();
    const [count, setCount] = useState();
    const [reviewActive, setReviewActive] = useState(false);
    let reviewList = useSelector((state) => state.reviews.list);
    console.log("i am here");
    console.log(reviewList);
    let reviewListComponents;

    useEffect(() => {
        dispatch(getUserReviewsAsync("Ben"));
    }, []);

    async function getReviewCount(user) {
        const response = await dispatch(getReviewsCountAsync(user));
        if (response.payload?.message === "No reviews found") {
            setCount(0);
        } else {
            setCount(response.payload);
        }
    }

    function makeReviewComponents(review) {
        console.log('review '+ JSON.stringify(review));
        let coffeeShopComponent = <CoffeeShop name= {review.coffeeShop.name} image={review.coffeeShop.image} hours={review.coffeeShop.hours}/>;
        return <Review key={review.id} id={review.id} text={review.text} author={review.author} coffeeShop={coffeeShopComponent}/>;
    }

   async function listReviews() {
       console.log("HERE:");
       console.log(reviewList);

        if (!reviewList) {
            setReviewActive(false);
        } else {
            // reviewList = response.payload;

            //
            reviewListComponents = reviewList.map((review) =>
                <Review key={review.id} id={review.id} text={review.text} author={review.author} coffeeShop={<CoffeeShop name= {review.coffeeShop.name} image={review.coffeeShop.image} hours={review.coffeeShop.hours}/>} />
            );
            // console.log("reviewListComponents " + JSON.stringify(reviewListComponents));
            // console.log("reviewListComponents first " + JSON.stringify(reviewListComponents[0]));
            setReviewActive(true);
        }
    }

    return (
        <div>
            <Navbar />
            {/*<div className="app" onLoad={() => getReviewCount(user)}>*/}
            {/*    <div className="login-form">*/}
            {/*        <div className='row-login'>*/}
            {/*            <img className="login-image" src={pug} />*/}
            {/*        </div>*/}
            {/*        <h2>{user}</h2>*/}
                    <div className="row" onClick={() => listReviews()}>Reviews count: {count}</div>
            {/*        <div className="row">Friends count: {friendsCount}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<Review key={reviewList.id} id={reviewList.id} text={reviewList.text} author={reviewList.author} coffeeShop={<CoffeeShop name= {reviewList.coffeeShop.name} image={reviewList.coffeeShop.image} hours={reviewList.coffeeShop.hours}/> }/>*/}

            {reviewActive && <ListFrame listName="userReviews" elements={reviewListComponents} key="review" />}
            {/*<div>*/}
            {/*    <ul>{reviewListComponents}</ul>*/}
            {/*</div>*/}
        </div>


    )
};

export default ProfilePage;