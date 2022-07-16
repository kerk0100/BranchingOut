import './styles.css';
import React, { useState } from "react";
import { deleteReviewAsync } from '../../reducers/reviews/thunk.js';
import { useDispatch} from "react-redux";


export default function Review(props) {

    const [myReview, isVisible] = useState((props.author === localStorage.getItem('username')));
    const dispatch = useDispatch();

    function handleDelete(e) {
        console.log(props)
        dispatch(deleteReviewAsync(props.id));
        window.location.reload();
        
    }
    return (
        <div className="review">
            <div className="reviewCard">
                <div className="reviewText">
                {props.text}
                </div>
                <div className="reviewAuthor">
                    Submitted by: {props.author}
                </div>
            {myReview && <button id="deleteButtonReviewCard" onClick={handleDelete}> Delete</button>}   
            
            </div>    
            <div className="reviewCoffeeShop">
                {props.coffeeShop}
            </div>
        </div>
    );
}