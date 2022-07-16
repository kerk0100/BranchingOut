import './styles.css';
import React, { useState } from "react";
import { createReviewAsync } from '../../reducers/reviews/thunk.js';
import { useDispatch} from "react-redux";
import Navbar from "../nav/Navbar";


export default function ReviewForm(props) {

    const [coffeeShop, setCoffeeShopValue] = useState({name: "name", image: "test", hours: "test", address: "address"});
    const [review, setValue] = useState({text: "enter review here!", author: "useState.getLoggedinUser", coffeeShop: coffeeShop});
    const dispatch = useDispatch();

    function handleSubmit(event) {
        //event.preventDefault();
        setValue({review});  
        //console.log(review); 
        dispatch(createReviewAsync(review));
        alert("Review posted!")
    }

    function handleChange(event) {
        event.preventDefault();
        setValue({...review, [event.target.name]: event.target.value})
    }

    function handleChangeCoffeeShop(event) {
        event.preventDefault();
        let coffeeShop = review.coffeeShop;
        coffeeShop[event.target.name] = event.target.value;
        setCoffeeShopValue({...coffeeShop,[event.target.name]: event.target.value})
        setValue({...review, coffeeShop: coffeeShop});
    }

    function handleClear(event) {
        event.preventDefault();
        setValue({text: " "})
    }

    return (
        <>
        <Navbar />
        <div className="reviewFormWrapper">
            <form id="reviewForm" onSubmit={handleSubmit} onReset={handleClear}>
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
                        name="name"
                        type="textarea"
                        value= {coffeeShop.name}
                        onChange= {e => handleChangeCoffeeShop(e)}> 
                    </input>
                    <p>Cafe Address</p>
                    <input
                        id="inputCoffeeShopAddress"
                        name="address"
                        type="textarea"
                        value={coffeeShop.address}
                        onChange= {e => handleChangeCoffeeShop(e)}
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