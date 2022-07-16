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

function CoffeeMap() {

    const dispatch = useDispatch();
    function makeReviewComponents(review) {
      return <MapReviews key={review._id} cafeName={review.name} hours={review.hours} address={review.address}/>;
    }
  
    let reviewList = useSelector((state) => state.mapReviews.list);
    let reviewListComponents = reviewList.map(element => makeReviewComponents(element));
  
      useEffect(() => {
          dispatch(getReviewsAsync());
        }, []);
    
    function getLatLon(){
        for (let i = 0; i < reviewList; i++){
            const latlong =  i.address.split(",");
            const latitude = latlong[0];
            const longitude = latlong[1];
            console.log(latitude);
        }
    }

    const startPosition = [49.266683211803446, -123.16634827187337]
    const enroute = [49.27141046145708, -123.15461071089254]
    const breka = [49.268639392128684, -123.18674248681495]
    const beyondBread = [49.26868139635726, -123.18516534787199]
    const jjBean = [49.26468383359408, -123.16939830733237]

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
                <div className="cafeList">
                    <ListFrame className="cafeList" key="mapReview" elements={reviewListComponents} listName="cafeList" />
                </div>
              </div>
              <div className='leaflet-container'>
                  <MapContainer center={startPosition} zoom={14}scrollWheelZoom={true} >
                      <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      />
                            <Marker icon={markerIconConst} position={enroute}>
                            <Popup>
                                Enroute Cafe <br /> Best Coffee in Town
                            </Popup>
                            </Marker>
                            <Marker icon={markerIconConst} position={breka}>
                            <Popup>
                                Breka Bakery <br /> Open 24 hrs!
                            </Popup>
                            </Marker>
                            <Marker icon={markerIconConst} position={beyondBread}>
                            <Popup>
                                Beyond Bread <br /> We sell bread and beyond
                            </Popup>
                            </Marker>
                            <Marker icon={markerIconConst} position={jjBean}>
                            <Popup>
                                J.J. Bean <br /> Just a J and his beans
                            </Popup>
                            </Marker>
                  </MapContainer>
              </div>
          </div>
      </div>
  );
}

export default CoffeeMap;