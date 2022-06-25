import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.css';
import Navbar from "../nav/Navbar";
import 'leaflet/dist/leaflet.css';
import L, { divIcon } from 'leaflet';
import markerIcon from "../images/marker.png";
import MapReviews from "../mapReviews/MapReviews.js";
import ListFrame from "../list/ListFrame";
import ReactDOM from 'react-dom/client';



function CoffeeMap() {
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

let sampleCafe1 = <MapReviews name="J.J. Bean" description="Just a J and his beans"/>
let sampleCafe2 = <MapReviews name="Enroute Cafe" description="Best Coffee in Town"/>
let sampleCafe3 = <MapReviews name="Breka Bakery" description="Open 24 hrs!"/>
let sampleCafe4 = <MapReviews name="Beyond Bread" description="We sell bread and beyond"/>

var sampleCafes = [sampleCafe1, sampleCafe2, sampleCafe3, sampleCafe4]

const [cafe, setCafe] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  alert(`The cafe you searched for was: ${cafe}`);
  setCafe("");
}

  return (
      <div>
          <Navbar />
          <div className="wrapper">
              <div className="reviews">
                <div className="reviewBox">
                    <div className="search">
                    <form onSubmit={handleSubmit}>
                        <label>Search:
                            <input 
                            type="text" 
                            value={cafe}
                            onChange={(e) => setCafe(e.target.value)}
                            />
                        </label>
                        <input type="submit" />
                    </form>
                    </div>
                  
                    <ListFrame elements={sampleCafes} listName="cafeList" header="Coffee nearby..."/>
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