import './styles.css';
import React, { useState, useEffect } from "react";
import { createReviewAsync} from '../../reducers/reviews/thunk.js';
import { getCafeByNameAsync } from '../../reducers/mapReviews/thunk.js';
import { useDispatch, useSelector} from "react-redux";
import Navbar from "../nav/Navbar";
import ListFrame from "../list/ListFrame";
const { v4: uuid } = require('uuid');


export default function ReviewForm(props) {

    let sampleURL = "https://cdn.vox-cdn.com/thumbor/UQzcVy9Zwif_Kku9OP_xIH1MVeU=/0x0:1600x1067/1820x1213/filters:focal(672x406:928x662):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71121846/52002370644_28ad527f48_h.0.jpg"
    const [coffeeShop, setCoffeeShopValue] = useState({name: "name", image: sampleURL, hours: "test", address: "address"});
    const [review, setValue] = useState({id: uuid(), text: "enter review here!", author: localStorage.getItem("username"), coffeeShop: coffeeShop});
    const dispatch = useDispatch();
    let cafeList = useSelector((state) => state.mapReviews.list);
    const [isVisible, setVisible] = useState(false);


    // useEffect(() => {
    //    console.log("tet")
    //   }, []);
    

    function handleSubmit(event) {
        setValue({review});  
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

    function searchCoffeeShops(event) {
        event.preventDefault();
        let filter = {name: coffeeShop.name}
        dispatch(getCafeByNameAsync(filter))
        setVisible(cafeList.length !== 0);
    }

    function renderOptions() {
        let options = cafeList.map((cafe) => {
            <option value={cafe.address}></option>
        })
        return options


    }
 
    return (
        <>
        <Navbar />
        <div className="reviewFormWrapper">
            <form id="reviewForm"  onReset={handleClear}>
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
                    <button id = "buttonCoffeeShopSearch" onClick={searchCoffeeShops}> Search Cafes</button>
                    {isVisible && <div>
                        <select
                        id="inputCoffeeShopAddress"
                        name="address"
                        value={coffeeShop.address}
                        onChange= {e => handleChangeCoffeeShop(e)}
                        >
                        {cafeList.map((cafe) => (
                            <option value={cafe.address}>{cafe.address}</option>)
                        )}
                        </select>
                    </div>}
                    </div>
                </div>
                <div className= "formButtons">
                    <button id = "buttonForm"  onClick={handleSubmit}> Submit</button>
                    <button id = "buttonForm" onClick={handleClear} > Clear </button>
                </div>
            </form>
        </div>
    </>
    );
}