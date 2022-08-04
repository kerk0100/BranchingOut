import React, {useState} from "react";
import coffee from './coffee.png';
import './styles.css';

const Navbar = () => {
    const [feedActive, setFeedActive] = useState();
    const [mapActive, setMapActive] = useState();
    const [profileActive, setProfileActive] = useState();
    const [reviewActive, setReviewActive] = useState();
    const username = localStorage.getItem("username");

    const setActive = () => {
        if (window.location.href === "/Feed") {
            setFeedActive("active");
        } else if (window.location.href === "/CoffeeMap"){
            setMapActive("active");
        }
        else if (window.location.href === "/Review") {
            setReviewActive("active")

        } else {
            setProfileActive("active");
        }
    }


  return (
      <div className="topnav" onLoad={setActive}>
          <img className="image" src={coffee} />

          <a className={feedActive} href="/Feed">Feed</a>
          <a className={mapActive} href="/CoffeeMap">Map</a>
          <a className={reviewActive} href="/Review">Post a Review</a>
          <div className="topnav-right">
              <a className={profileActive} href="/Profile"><b>{username.toUpperCase()}</b></a>
              <a href="/">Signout</a>
          </div>
      </div>)
};

export default Navbar;



