import './styles.css';
import React from "react";
import { MapContainer, TileLayer} from 'react-leaflet';
import MarkerList from './MarkerList';


const Map = (props) => {

  const startCenter = props.startCenter;
  const reviewList = props.reviewList;
  const markerIconConst = props.markerIcon;
  return (
    <div className='leaflet-container'>
        <MapContainer center={startCenter} zoom={14}scrollWheelZoom={true} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
                <MarkerList elements={reviewList} markerIcon={markerIconConst} />
        </MapContainer>
    </div>
  );
}

export default Map;