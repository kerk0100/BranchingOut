import './styles.css';
import {Marker} from 'react-leaflet';


const MarkerList = (props) => {
  const listElements = props.elements;
  const listIcon = props.markerIcon;
  return (
    <div className="listFrame">
          {listElements.map((el, i) => (
             <Marker key={i} icon={listIcon} position={el}/>
             
          ))}
    </div>
  );
}

export default MarkerList;