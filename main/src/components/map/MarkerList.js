import './styles.css';
import {Marker, Popup} from 'react-leaflet';
import MapReviews from "../mapReviews/MapReviews.js";
import ListFrame from "../list/ListFrame";
import { useDispatch, useSelector } from "react-redux";
import {getReviewsAsync} from "../../reducers/reviews/thunk";
import React, {useEffect, useState} from "react";
import CoffeeShopMap from "./CoffeeShopMap";
import Review from "../review/Review";


const MarkerList = (props) => {
  const dispatch = useDispatch();
  let name;
  let reviewList = useSelector((state) => state.reviews.list);
  let reviewListComponents;
  const [isOpenReviews, setIsOpenReviews] = useState(false);
  const [specificReviews, setSpecificReviews] = useState([]);

  useEffect(() => {
    dispatch(getReviewsAsync());
  }, []);

  let cafeReviewList = [];

  function visibility(){
    // console.log("here");
    setIsOpenReviews(!isOpenReviews);
  }

  function SeeReviews(element){
      visibility();
      // console.log(element.reviews);
      for (let i = 0; i < element.reviews.length; i++){
        reviewList.filter((review) => review.id == element.reviews[i])
        .map((reviews) => cafeReviewList.push(reviews))
      }
      // console.log(cafeReviewList);
      setSpecificReviews(cafeReviewList);
      // console.log(specificReviews);
  }

  reviewListComponents = specificReviews.map((review) =>
    <Review key={review.id} id={review.id} text={review.text} author={review.author} coffeeShop={<CoffeeShopMap name= {review.coffeeShop.name} image={review.coffeeShop.image} hours={review.coffeeShop.hours}/>} />
  );

  const listElements = props.elements;
  const listIcon = props.markerIcon;
  return (
    <div>
      <div className="listFrame">
            {listElements.map((el, i) => (
              <Marker key={i} icon={listIcon} position={el.coordinates} onClick={() => {visibility()}}>
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