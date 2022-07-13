import React from "react";
import coffee from './coffee.png';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
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
                <a className="nav-link" href="Feed">
                Create a Review
                </a>
            </li>
            </ul>
        </div>
        </nav>)
};

export default Navbar;



