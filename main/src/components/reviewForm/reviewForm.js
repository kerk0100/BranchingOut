import './styles.css';
import React, { useState } from "react";
import { createReviewAsync } from '../../reducers/reviews/thunk.js';
import { useDispatch} from "react-redux";


export default function ReviewForm(props) {

    let sampleCoffeeShop = {name: "Sample",  image:"https://nomsmag.gumlet.io/wp-content/uploads/2021/09/best-burnaby-cafe-ki-cafe.jpg", hours:"Moki is cute"};

    const [review, setValue] = useState({text: "enter review here!", author: "useState.getLoggedinUser"});
    const dispatch = useDispatch();

    function handleSubmit(event) {
        //event.preventDefault();
        dispatch(createReviewAsync({...review, coffeeShop: sampleCoffeeShop}));
    }

    function handleChange(event) {
        event.preventDefault();
        setValue({...review, [event.target.name]: event.target.value})  
    }

    function handleClear(event) {
        event.preventDefault();
        setValue({text: " "})
    }

    return (
        <div className="reviewForm">
            <form onSubmit={handleSubmit} onReset={handleClear}>
                <label>
                    Create a Review
                    <input
                        name="reviewText"
                        type="textarea"
                        value={review.text}
                        onChange= {e => handleChange(e)}
                    />

                </label>
                <button type= "submit"> Submit</button>
                <button type= "reset"> Clear </button>
            </form>

        </div>
    );
}