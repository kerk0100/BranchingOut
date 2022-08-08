import './Style.css';
import Navbar from './components/nav/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";
import Login from "./components/login/Login";
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from "react-router";
import Feed from "./components/feed/Feed";
import CoffeeMap from "./components/map/CoffeeMap";
import ReviewForm from './components/reviewForm/reviewForm';
import SignUp from "./components/signUp/SignUp";
import ProfilePage from "./components/profile/profilePage";

function App() {

    return (
      <div className="body">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/Feed" element={<Feed />} />
                  <Route path="/CoffeeMap" element={<CoffeeMap/>} />
                  <Route path="/Review" element={<ReviewForm/>} />
                  <Route path="/Profile" element={<ProfilePage/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
