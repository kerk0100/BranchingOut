import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from "../nav/Navbar";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from "../images/marker.png";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsAsync } from "../../reducers/mapReviews/thunk";
import Map from './Map.js';

function CoffeeMap() {
    const dispatch = useDispatch();

    const [startCenter, setStartCenter] = useState([49.263582,-123.128836]);

    useEffect(() => {
        dispatch(getReviewsAsync());
      }, []);

    let reviewList = useSelector((state) => state.mapReviews.list);

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
              {mapComponent}
          </div>
      </div>
  );
}

export default CoffeeMap;