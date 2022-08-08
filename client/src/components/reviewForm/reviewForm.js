import './styles.css';
import React, { useState, useEffect } from "react";
import {addImageReviewAsync, createReviewAsync} from '../../reducers/reviews/thunk.js';
import { getReviewsAsync } from '../../reducers/mapReviews/thunk.js';
import { useDispatch, useSelector} from "react-redux";
import Navbar from "../nav/Navbar";
import Creatable from 'react-select/creatable';
const { v4: uuid } = require('uuid');


export default function ReviewForm(props) {

    let sampleURL = "https://cdn.vox-cdn.com/thumbor/UQzcVy9Zwif_Kku9OP_xIH1MVeU=/0x0:1600x1067/1820x1213/filters:focal(672x406:928x662):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71121846/52002370644_28ad527f48_h.0.jpg"
    const [coffeeShop, setCoffeeShopValue] = useState({name: "name", image: sampleURL, hours: "test", address: "address"});
    const [review, setValue] = useState({id: uuid(), text: " ", author: localStorage.getItem("username"), coffeeShop: coffeeShop});
    const dispatch = useDispatch();
    let cafeList = useSelector((state) => state.mapReviews.list);
    const everyCafe = cafeList;
    const [isVisible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(" ");
    const [selectedAddrOption, setSelectedAddrOption] = useState(" ");


    useEffect(() => {
        dispatch(getReviewsAsync())
      }, []);
    

    function handleSubmit(event) {
        setValue({review});
        console.log("hello i am here");
        console.log(review);
        event.preventDefault();
        dispatch(createReviewAsync(review));
        alert("Review posted!")
    }

    function handleChange(event) {
        event.preventDefault();
        setValue({...review, [event.target.name]: event.target.value})
    }

    function handleChangeCoffeeShop(event) {

        setSelectedOption(event.value, setVisible(true))
        
        let coffeeShop = review.coffeeShop;
        coffeeShop['name'] = event.value;
        setCoffeeShopValue({...coffeeShop,['name']: event.value})
        setValue({...review, coffeeShop: coffeeShop});
        setSelectedAddrOption(" ");
    }

    function handleChangeCoffeeShopLocationChange(event) {
        
        let coffeeShop = review.coffeeShop;
        coffeeShop['address'] = event.value.address;
        coffeeShop['hours'] = event.value.hours;
        setCoffeeShopValue({...coffeeShop,['address']: event.value.address})
        setCoffeeShopValue({...coffeeShop,['hours']: event.value.hours})
        setValue({...review, coffeeShop: coffeeShop});
    }

    function handleChangeCoffeeShopImage(event) {
        const image = new FormData();
        console.log("test case 1");
        console.log(review.id);
        image.append("imageFile", event.target.files[0]);
        dispatch(addImageReviewAsync([image, review.id]));
    }


    function handleClear(event) {
        event.preventDefault();
        setValue({text: " "})
    }

    function searchCoffeeShops(e) {

        if (selectedOption === null) {
            return [];
        }
        console.log(cafeList)
        let addressList = []
        cafeList.filter((element) => element.name === selectedOption)
        .map((element) => addressList.push({label:element.address, value:element}))

        return(addressList)
    }

    function getCafesForSelectMenu() {
        let allCafesSet = new Set()
        everyCafe.map((element) => {
                allCafesSet.add(element.name)  
        })
        let allCafes = [];
        [...allCafesSet].map((element) => {
            allCafes.push({value: element, label:element})
        })

        return allCafes;
    }
 
    return (
        <>
        <Navbar />
        <div className="reviewFormWrapper">
            <form id="reviewForm"  onReset={handleClear}>
                <div className = "labelForm">
                    <h3>Cafe:</h3>
                    <Creatable options = {getCafesForSelectMenu()}
                                defaultValue={selectedOption}
                                onChange={e => handleChangeCoffeeShop(e)}/> 
                    {isVisible && <Creatable options = {searchCoffeeShops()}
                                defaultValue={selectedAddrOption}
                                onChange={e => handleChangeCoffeeShopLocationChange(e)}/>}
                    <br></br>
                    <h3>Enter description:</h3>
                    <input
                        id="inputReviewText"
                        name="text"
                        type="textarea"
                        value={review.text}
                        onChange= {e => handleChange(e)}>
                    </input>
                    <h3>Upload an image:</h3>
                    <input type="file" name="imageFile" onChange={(event) => handleChangeCoffeeShopImage(event)}></input>
                </div>
                <div className= "row">
                    <button id = "buttonForm"  onClick={handleSubmit}> Submit</button>
                    <button id = "buttonForm" onClick={handleClear} > Clear </button>
                </div>
            </form>
        </div>
    </>
    );
}