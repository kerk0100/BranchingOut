import './styles.css';
import {Marker, Popup} from 'react-leaflet';

function seeReviews(element){
    console.log(element);
}

const MarkerList = (props) => {
  const listElements = props.elements;
  const listIcon = props.markerIcon;
  return (
    <div className="listFrame">
          {listElements.map((el, i) => (
             <Marker key={i} icon={listIcon} position={el.coordinates}>
                <Popup>
                    <strong>{el.name}</strong>
                    <br/>
                    {el.address}
                    <br/>
                    {el.hours}
                    <br/>
                    <a id="myLink" href="#" onClick={() => { seeReviews(el) }}>See Reviews</a>
                </Popup>
             </Marker>

          ))}
    </div>
  );
}

export default MarkerList;