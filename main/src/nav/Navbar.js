import React from "react";
import Feed from "../feed/Feed.js";
import CoffeeMap from "../map/CoffeeMap.js";
import coffee from './coffee.png';
import Login from "../login/Login.js";
import './styles.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//   bootstrap
//   react-bootstrap
//   react-router-dom

//   https://retool.com/blog/building-a-react-navbar/ 
const Navbar = () => {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className='image'>
            <img className="image" src={coffee} />
        </div>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="Feed">
                Feed <span className="sr-only"></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="CoffeeMap">
                Map
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="Login">
                Login
                </a>
            </li>
            </ul>
        </div>
        </nav>
        <Routes>
            <Route path="/Feed" element={<Feed/>}/>
            <Route path="/CoffeeMap" element={<CoffeeMap/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    </Router>);
};

export default Navbar;



