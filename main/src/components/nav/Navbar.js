import React, {useState} from "react";
import coffee from './coffee.png';
import './styles.css';

const Navbar = () => {
    const [feedActive, setFeedActive] = useState();
    const [mapActive, setMapActive] = useState();
    const [profileActive, setProfileActive] = useState();
    const user = localStorage.getItem("user");

    const setActive = () => {
        if (window.location.href === "http://localhost:3000/Feed") {
            setFeedActive("active");
        } else if (window.location.href === "http://localhost:3000/CoffeeMap"){
            setMapActive("active");
        } else {
            setProfileActive("active");
        }
    }


  return (
      <div className="topnav" onLoad={setActive}>
          <img className="image" src={coffee} />

          <a className={feedActive} href="/Feed">Feed</a>
          <a className={mapActive} href="/CoffeeMap">Map</a>
          <div className="topnav-right">
              <a className={profileActive} href="/Profile"><b>{user.toUpperCase()}</b></a>
          </div>
      </div>)
};

export default Navbar;



