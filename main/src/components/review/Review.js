import './styles.css';
import React, { useState } from "react";
import { deleteReviewAsync, putReviewAsync } from '../../reducers/reviews/thunk.js';
import { useDispatch} from "react-redux";
import PopUp from "../popup/popUp";


export default function Review(props) {

    const [myReview, isVisible] = useState((props.author === localStorage.getItem('username')));
    const [popupState, setPopupState] = useState(false);
    const [reviewText, setReviewText] = useState(props.text);
    const dispatch = useDispatch();
    

    function handleDelete(e) {
        dispatch(deleteReviewAsync(props.id));
        window.location.reload();
    }

    function toggleEditPopup() {
        setPopupState(!popupState);
    }

    function handleEditChange (e) {
        setReviewText(e.target.value)
    }
    function handleEditSubmit (e) {
        dispatch(putReviewAsync({id: props.id, text:reviewText}));
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
            <div className="reviewButtons">
            {myReview && <button id="deleteButtonReviewCard" onClick={handleDelete}> Delete</button>}   
            {myReview &&<button id="editButtonReviewCard" onClick={toggleEditPopup}> Edit</button>} 
            {popupState && 
                <PopUp
                    content={<>
                        <h2>Edit review</h2>
                        <input
                        id="editReviewText"
                        name="editbox"
                        type="textarea"
                        defaultValue={props.text}
                        onChange= {e => handleEditChange(e)}>
                        </input>
                        <button id="editButtonReviewCardSubmit" onClick={e => handleEditSubmit(e)}> Submit</button>
                        

                </>}
                    handleClose={toggleEditPopup}
                />}  
            </div>  
            </div>    
            <div className="reviewCoffeeShop">
                {props.coffeeShop}
            </div>
        </div>
    );
}