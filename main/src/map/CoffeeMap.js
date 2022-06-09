import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../Style.css';



function CoffeeMap() {

  return (
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
  );
}

export default CoffeeMap;