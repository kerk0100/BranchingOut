import './styles.css';
import {Marker, Popup} from 'react-leaflet';
import MapReviews from "../mapReviews/MapReviews.js";
import ListFrame from "../list/ListFrame";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsAsync } from "../../reducers/mapReviews/thunk";
import React, { useEffect } from 'react';
import PopUp from "../popup/popUp";

function SeeReviews(element){
    console.log(element);
    <PopUp
    content={<>
        <h2>Hello</h2><br></br>
    </>}
    />
    // const dispatch = useDispatch();

    // function makeReviewComponents(review) {
    //   return <MapReviews key={review._id} cafeName={review.name} hours={review.hours} address={review.address}/>;
    // }

    // let reviewList = useSelector((state) => state.mapReviews.list);
    // let reviewListComponents = reviewList.map(element => makeReviewComponents(element));

    // useEffect(() => {
    //   dispatch(getReviewsAsync());
    // }, []);

}

const MarkerList = (props) => {
  const listElements = props.elements;
  const listIcon = props.markerIcon;
  return (
    <div>
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
                      <a id="myLink" href="#" onClick={() => { SeeReviews(el) }}>See Reviews</a>
                  </Popup>
              </Marker>

            ))}
      </div> 
    </div>
  );
}

export default MarkerList;