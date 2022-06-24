import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.css';
import Navbar from "../nav/Navbar";



function CoffeeMap() {

  return (
      <div>
          <Navbar />
          <div className="wrapper">
              <div className="reviews">
                  This is where the reviews will go
              </div>
              <div className='leaflet-container'>
                  <MapContainer center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false} >
                      <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      />
                  </MapContainer>
              </div>
          </div>
      </div>
  );
}

export default CoffeeMap;