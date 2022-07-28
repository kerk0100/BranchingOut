// import React, {useState} from "react";
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.css';
import Navbar from "../nav/Navbar";
import 'leaflet/dist/leaflet.css';
import L, { divIcon } from 'leaflet';
import markerIcon from "../images/marker.png";
import MapReviews from "../mapReviews/MapReviews.js";
import ListFrame from "../list/ListFrame";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsAsync } from "../../reducers/mapReviews/thunk";
import MarkerList from './MarkerList';

function CoffeeMap() {

    const dispatch = useDispatch();
    function makeReviewComponents(review) {
      return <MapReviews key={review._id} cafeName={review.name} hours={review.hours} address={review.address}/>;
    }

    function makeLatLonList(review){
        return review.coordinates
    }
    // getReviewsAsync currently doesn't have any filter, idea is to update the filter
    // whenever the user clicks on the "see reviews" button in markerlist.js and then only 
    // reviews from the active coffee shop will appear
    let reviewList = useSelector((state) => state.mapReviews.list);
    let reviewListComponents = reviewList.map(element => makeReviewComponents(element));
    let coordinate_list = reviewList.map(element => makeLatLonList(element));
  
      useEffect(() => {
          dispatch(getReviewsAsync());
        }, []);


    const startPosition = [49.286177, -123.126971]

    const markerIconConst = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        iconSize: [30, 40],
        iconAnchor: [5, 40],
        popupAnchor: [10, -44],
        html: `<span style="background-color:rgb(175, 121, 49)" />`
    });

  return (
      <div>
          <Navbar />
          <div className="wrapper">
              <div className="reviews">
                    
              </div>
              <div className='leaflet-container'>
                  <MapContainer center={startPosition} zoom={14}scrollWheelZoom={true} >
                      <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      />
                            <MarkerList elements={reviewList} markerIcon={markerIconConst} />
                  </MapContainer>
              </div>
          </div>
      </div>
  );
}

export default CoffeeMap;