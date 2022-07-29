import './styles.css';
import React, { useState, useEffect } from "react";
import { createReviewAsync} from '../../reducers/reviews/thunk.js';
import { getCafeByNameAsync, getReviewsAsync } from '../../reducers/mapReviews/thunk.js';
import { useDispatch, useSelector} from "react-redux";
import Navbar from "../nav/Navbar";
import Creatable, { useCreatable } from 'react-select/creatable';
import Select from 'react-select'
import ListFrame from "../list/ListFrame";
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
        console.log(review);
        event.preventDefault()
        dispatch(createReviewAsync(review));
        alert("Review posted!")
        //window.location = 'localhost:3000/Feed';
    }

    function handleChange(event) {
        event.preventDefault();
        setValue({...review, [event.target.name]: event.target.value})
    }

    function handleChangeCoffeeShop(event) {
        // console.log(event)
        // setSelectedOption(event.value)

        setSelectedOption(event.value, setVisible(true))
        
        let coffeeShop = review.coffeeShop;
        coffeeShop['name'] = event.value;
        setCoffeeShopValue({...coffeeShop,['name']: event.value})
        setValue({...review, coffeeShop: coffeeShop});
        setSelectedAddrOption(" ");
        // console.log(review)
        // let filter = {name: event.value}
        // console.log(cafeList)
        //dispatch(getCafeByNameAsync(filter))
    }

    function handleChangeCoffeeShopLocationChange(event) {
        
        let coffeeShop = review.coffeeShop;
        coffeeShop['address'] = event.value.address;
        coffeeShop['hours'] = event.value.hours;
        setCoffeeShopValue({...coffeeShop,['address']: event.value.address})
        setCoffeeShopValue({...coffeeShop,['hours']: event.value.hours})
        setValue({...review, coffeeShop: coffeeShop});
        // console.log(coffeeShop)
        // console.log(review)
        // let filter = {name: event.value}
        //console.log(cafeList)
        //dispatch(getCafeByNameAsync(filter))
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
        
        // let filter = {name: selectedOption}
        // console.log(filter)
        // //dispatch(getCafeByNameAsync(filter))
        // console.log(cafeList)
        // setVisible(cafeList.length !== 0);
    }

    function renderOptions() {
        let options = cafeList.map((cafe) => {
            <option value={cafe.address}></option>
        })
        return options

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
                    <Creatable options = {getCafesForSelectMenu()}
                                defaultValue={selectedOption}
                                onChange={e => handleChangeCoffeeShop(e)}/> 
                    {isVisible && <Creatable options = {searchCoffeeShops()}
                                defaultValue={selectedAddrOption}
                                onChange={e => handleChangeCoffeeShopLocationChange(e)}/>}
                    
                    <input
                        id="inputReviewText"
                        name="text"
                        type="textarea"
                        value={review.text}
                        onChange= {e => handleChange(e)}>
                    </input>
                    {/* <div className = "coffeeShopSearchForm">
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
                        <button id = "buttonForm"  onClick={handleSubmit}> Add Cafe</button>
                    </div>}
                    </div> */}
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