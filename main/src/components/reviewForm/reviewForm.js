import './styles.css';
import React, { useState } from "react";
import { createReviewAsync } from '../../reducers/reviews/thunk.js';
import { useDispatch} from "react-redux";
import Navbar from "../nav/Navbar";


export default function ReviewForm(props) {

    let sampleCoffeeShop = {name: "Sample",  image:"https://nomsmag.gumlet.io/wp-content/uploads/2021/09/best-burnaby-cafe-ki-cafe.jpg", hours:"Moki is cute"};

    const [review, setValue] = useState({text: "enter review here!", author: "useState.getLoggedinUser", coffeeShop:{name: "name", image: "test", hours: "test"}});
    const dispatch = useDispatch();

    function handleSubmit(event) {
        //event.preventDefault();
        setValue({review, 'coffeeShop': sampleCoffeeShop})
        //console.log(review);
        //testReview = review['coffeeShop'] = review;
        dispatch(createReviewAsync(review));
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
        <>
        <Navbar />
        <div className="reviewFormWrapper">
            <form id = "form" onSubmit={handleSubmit} onReset={handleClear}>
                <div className = "labelForm">
                    <input
                        id="inputReviewText"
                        name="text"
                        type="textarea"
                        value={review.text}
                        onChange= {e => handleChange(e)}>
                    </input>
                    <div className = "coffeeShopSearchForm">
                        <p>Cafe Name</p>
                    <input
                        id="inputCoffeeShopName"
                        name="coffeeShop.name"
                        type="textarea"
                        value= {review.coffeeShop.text}
                        onChange= {e => handleChange(e)}> 
                    </input>
                    <p>Cafe Address</p>
                    <input
                        id="inputCoffeeShopAddress"
                        name="coffeeShop.address"
                        type="textarea"
                        value={review.coffeeShop.text}
                        onChange= {e => handleChange(e)}
                    />
                    </div>
                </div>
                <div className= "formButtons">
                    <button id = "buttonForm" type= "submit"> Submit</button>
                    <button id = "buttonForm" type= "reset"> Clear </button>
                </div>
            </form>
        </div>
    </>
    );
}