import './styles.css';
import {Marker, Popup} from 'react-leaflet';
import MapReviews from "../mapReviews/MapReviews.js";
import ListFrame from "../list/ListFrame";
import { useDispatch, useSelector } from "react-redux";
import {getUserReviewsAsync} from "../../reducers/reviews/thunk";
import React, {useEffect, useState} from "react";
import CoffeeShop from "../coffeeShop/CoffeeShop";
import Review from "../review/Review";


const MarkerList = (props) => {
  const dispatch = useDispatch();
  let name;
  let reviewList = useSelector((state) => state.reviews.list);
  let reviewListComponents;
  const [isOpenReviews, setIsOpenReviews] = useState(false);

  useEffect(() => {
    // dispatch(getReviewsAsync({author: 'benny'}));
    dispatch(getUserReviewsAsync("benny"));
  }, []);

  reviewListComponents = reviewList.map((review) =>
    <Review key={review.id} id={review.id} text={review.text} author={review.author} coffeeShop={<CoffeeShop name= {review.coffeeShop.name} image={review.coffeeShop.image} hours={review.coffeeShop.hours}/>} />
  );

  function SeeReviews(element){
      // name = element.id;
      console.log(reviewList);
      setIsOpenReviews(!isOpenReviews);
  }
  const listElements = props.elements;
  const listIcon = props.markerIcon;
  return (
    <div>
      <div className="listFrame">
            {listElements.map((el, i) => (
              <Marker key={i} icon={listIcon} position={el.coordinates} >
                  <Popup>
                      <strong>{el.name}</strong>
                      <br/>
                      {el.address}
                      <br/>
                      {el.hours}
                      <br/>
                      <a id="myLink" href="#" onClick={() => { SeeReviews(el) }}>See Reviews</a>
                      {isOpenReviews &&
                      <div className="scrollBar">
                            <ListFrame listName="mapReviews" elements={reviewListComponents} key="mapReview" />
                      </div>
                      }
                  </Popup>

              </Marker>

            ))}
      </div> 
    </div>
  );
}

export default MarkerList;