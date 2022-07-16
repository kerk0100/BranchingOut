import React, {useState} from "react";
import './profile.css';
import Navbar from "../nav/Navbar";
import pug from "./pug.jpg";
import {getReviewsCountAsync} from "../../reducers/reviews/thunk";
import {useDispatch} from "react-redux";

const ProfilePage = () => {
    const user = localStorage.getItem("username");
    const friendsCount = localStorage.getItem("friendsCount");
    const dispatch = useDispatch();
    const [count, setCount] = useState();

    async function getReviewCount(user) {
        const response = await dispatch(getReviewsCountAsync(user));
        console.log('response ' + JSON.stringify(response));
        if (response.payload?.message === "No reviews found") {
            setCount(0);
        } else {
            setCount(response.payload);
        }

    }

    return (
        <div>
            <Navbar />
            <div className="app" onLoad={() => getReviewCount(user)}>
                <div className="login-form">
                    <div className='row-login'>
                        <img className="login-image" src={pug} />
                    </div>
                    <h2>{user}</h2>
                    <div className="row">Reviews count: {count}</div>
                    <div className="row">Friends count: {friendsCount}</div>
                </div>
            </div>
        </div>


    )
};

export default ProfilePage;