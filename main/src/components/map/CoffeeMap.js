// import React, {useState} from "react";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.css';
import Navbar from "../nav/Navbar";
import 'leaflet/dist/leaflet.css';
import L, { divIcon } from 'leaflet';
import markerIcon from "../images/marker.png";
import MapReviews from "../mapReviews/MapReviews.js";
import ListFrame from "../list/ListFrame";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsAsync, getAddressReviewsAsync, getCafeByNameAsync } from "../../reducers/mapReviews/thunk";
import MarkerList from './MarkerList';
import Map from './Map.js';
import Creatable, { useCreatable } from 'react-select/creatable';
const { v4: uuid } = require('uuid');

function CoffeeMap() {

    let sampleURL = "https://cdn.vox-cdn.com/thumbor/UQzcVy9Zwif_Kku9OP_xIH1MVeU=/0x0:1600x1067/1820x1213/filters:focal(672x406:928x662):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71121846/52002370644_28ad527f48_h.0.jpg"
    const [selectedAddrOption, setSelectedAddrOption] = useState(null);
    
    let cafeList = useSelector((state) => state.mapReviews.list);
    const everyCafe = cafeList;
    const [review, setValue] = useState({id: uuid(), text: " ", author: localStorage.getItem("username"), coffeeShop: coffeeShop});
    const [coffeeShop, setCoffeeShopValue] = useState({name: "name", image: sampleURL, hours: "test", address: "address"});
    const dispatch = useDispatch();
    const [isVisible, setVisible] = useState(false);

    const [startCenter, setStartCenter] = useState([49.263582,-123.128836]);
    const [selectedOption, setSelectedOption] = useState("1093 West Broadway, Vancouver, V6H");

    useEffect(() => {
        dispatch(getReviewsAsync());
      }, []);

    function makeReviewComponents(review) {
      return <MapReviews key={review._id} cafeName={review.name} hours={review.hours} address={review.address}/>;
    }

    function makeLatLonList(review){
        return review.coordinates
    }

    function handleChangeCoffeeShop(event) {
        setSelectedOption(event.value, setVisible(true));
        let coordinates = []
        cafeList.filter((element) => element.address === selectedOption)
        .map((element) => coordinates.push(element.coordinates))
        setStartCenter(coordinates);
        // console.log(startCenter); 
    }

    // function getStartPosition(){
    //     let coordinates = []
    //     cafeList.filter((element) => element.address === selectedOption)
    //     .map((element) => coordinates.push(element.coordinates))
    //     let temp = coordinates;
    //     console.log(temp);
    //     return temp;
    // }

    function getCafesForSelectMenu() {
        let allCafesSet = new Set()
        everyCafe?.map((element) => {
                allCafesSet.add(element.address)  
        })
        let allCafes = [];
        [...allCafesSet].map((element) => {
            allCafes.push({value: element, label:element})
        })

        return allCafes;
    }

    let reviewList = useSelector((state) => state.mapReviews.list);
    let reviewListComponents = reviewList.map(element => makeReviewComponents(element));
    let coordinate_list = reviewList.map(element => makeLatLonList(element));

    const markerIconConst = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        iconSize: [30, 40],
        iconAnchor: [5, 40],
        popupAnchor: [10, -44],
        html: `<span style="background-color:rgb(175, 121, 49)" />`
    });

    let mapComponent = <Map reviewList={reviewList} markerIcon={markerIconConst} startCenter={startCenter}/>

  return (
      <div>
          <Navbar />
          <div className="wrapper">
              <div className="reviews">
                    Search: 
                    <div className = "labelForm">
                    <Creatable options = {getCafesForSelectMenu()}
                                defaultValue={selectedOption}
                                onChange={e => handleChangeCoffeeShop(e)}/> 

                    </div>
              </div>
              {mapComponent}
          </div>
      </div>
  );
}

export default CoffeeMap;