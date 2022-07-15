import React, {useState} from "react";
import './profile.css';
import Navbar from "../nav/Navbar";
import coffee from "../nav/coffee.png";
import pug from "./pug.jpg";

const ProfilePage = () => {
    const user = localStorage.getItem("user");

    return (
        <div>
            <Navbar />
            <div className="app">
                <div className="login-form">
                    <div className='row-login'>
                        <img className="login-image" src={pug} />
                    </div>
                    <h2>{user}</h2>
                    <div className="row">Reviews count: </div>
                    <div className="row">Friends count: </div>
                </div>
            </div>
        </div>


    )
};

export default ProfilePage;